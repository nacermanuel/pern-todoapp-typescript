import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallTareas } from "../../service/apiCallTareas";
import { apiUpdateTareas } from "../../service/apiUpdateTareas";

const initialState = {
    loading: false,
    tareas: [],
    error: '',
    createdTask:[],
    modifiedTask:[],
    deletedTask:[]
} ;

const fetchTareas = createAsyncThunk('tareas/fetchTareas', apiCallTareas)

const updateDataBase = createAsyncThunk(
    'todo_app/updateTareas',
    async (_,thunkAPI) => {
        
        //CREACION DE TAREAS NUEVAS
        const { createdTask } = thunkAPI.getState().todo_app ;
        console.log(createdTask)
        if(createdTask.length > 0 ){
            createdTask.map(async (e) => {
                const resp = await apiUpdateTareas(e) 
                console.log(resp)
            })
            thunkAPI.dispatch(tareasSlice.actions.resetCreated())
        }else{
            console.log('noting to update');
        }
        
    })


// const fetchTareas = createAsyncThunk('tareas/fetchTareas', async (id,thunkAPI)=>{
//     const { createdTask } = await thunkAPI.getState().todo_app;
//     console.log(createdTask)
//     const resp = await apiCallTareas(id)
//     return resp
// })


// const updateDataBase = createAsyncThunk(
//     'todo_app/updateTareas',
//     async (_,thunkAPI) => {
//         const { createdTask } = thunkAPI.getState().todo_app ;
//         console.log(createdTask)
//         const taskPrueba = { name: "Prueba 2  front", description: "Prueba 2 front", userId:"b3ed8513-9f10-4b56-92c4-86eec76d19e7", date: {"year":2023,"month":5,"day":1}, complete: false }
//         const resp = await apiUpdateTareas(taskPrueba)
//         console.log(resp)

//     })


const tareasSlice = createSlice({
    name: 'todo_app',
    initialState,
    reducers: {
        updateTarea: (state, action)=>{
            const index = state.tareas.findIndex((e) => e.id == action.payload.id)
            state.tareas[index] = action.payload
            state.modifiedTask.push(action.payload.id)
        },
        deleteTarea: (state, action) => {
            state.tareas = [...state.tareas.filter(e=> e.id != action.payload)]
            state.deletedTask.push(action.payload)
            state.modifiedTask = [...state.modifiedTask.filter(e=> e != action.payload)]
            state.createdTask = [...state.createdTask.filter(e=> e != action.payload)]
        },
        createTarea: (state, action) => {
            state.tareas.push(action.payload)
            state.createdTask.push(action.payload)
        },
        resetCreated:(state)=>{
            state.createdTask = []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTareas.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTareas.fulfilled, (state, action) => {
            state.loading = false
            state.tareas = action.payload
            state.error = ''
        })
        builder.addCase(fetchTareas.rejected, (state, action) => {
            state.loading = false
            state.tareas = []
            state.error = action.error.message
        })
        builder.addCase(updateDataBase.pending, (state) => {
            console.log('pending con exito')
        })
        builder.addCase(updateDataBase.fulfilled, (state, action) => {
            console.log('fulfill con exito')
        })
        builder.addCase(updateDataBase.rejected, (state, action) => {
            console.log(`rejected: ${action.error.message}`)
        })
        
    }
})

export default tareasSlice.reducer ;
export { fetchTareas, updateDataBase }
export const { updateTarea, deleteTarea , createTarea, } = tareasSlice.actions