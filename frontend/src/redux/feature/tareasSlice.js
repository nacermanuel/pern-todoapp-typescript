import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallTareas } from "../../service/apiCallTareas";
import { apiCreateTareas } from "../../service/apiCreateTareas";
import { apiUpdateTarea } from "../../service/apiUpdateTarea";
import { apiDeleteTareas } from "../../service/apiDeleteTareas";

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
        
        const { createdTask, modifiedTask, deletedTask } = thunkAPI.getState().todo_app ;

        //CREACION DE TAREAS NUEVAS
        if(createdTask.length > 0 ){
            createdTask.map(async (e) => {
                const resp = await apiCreateTareas(e) 
            })
            thunkAPI.dispatch(tareasSlice.actions.resetCreated())
        }

        //ACTUALIZAR TAREAS EXISTENTES
        if(modifiedTask.length>0){
            modifiedTask.map(async (e) => {
                const resp = await apiUpdateTarea(e) 
            })
            thunkAPI.dispatch(tareasSlice.actions.resetModified())
        }

        //BORRAR TAREAS DE BBDD
        if(deletedTask.length>0){
            deletedTask.map(async (e) => {
                const resp = await apiDeleteTareas(e) 
            })
            thunkAPI.dispatch(tareasSlice.actions.resetDeleted())
        }
        
    })

const tareasSlice = createSlice({
    name: 'todo_app',
    initialState,
    reducers: {
        updateTarea: (state, action)=>{
            const index = state.tareas.findIndex((e) => e.id == action.payload.id)
            state.tareas[index] = action.payload
            state.modifiedTask.push(action.payload)
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
        },
        resetModified:(state)=>{
            state.modifiedTask = []
        },
        resetDeleted:(state)=>{
            state.deletedTask = []
        },
        orderChangeUp:(state, action)=>{
            console.log(state.tareas)

            if(action.payload > 0){
                [ state.tareas[action.payload] , state.tareas[action.payload-1] ] = [ state.tareas[action.payload-1] , state.tareas[action.payload] ]
                console.log(state.tareas)
            }
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

        })
        builder.addCase(updateDataBase.fulfilled, (state, action) => {

        })
        builder.addCase(updateDataBase.rejected, (state, action) => {
            console.log(`rejected: ${action.error.message}`)
        })
        
    }
})

export default tareasSlice.reducer ;
export { fetchTareas, updateDataBase }
export const { updateTarea, deleteTarea , createTarea, orderChangeUp} = tareasSlice.actions