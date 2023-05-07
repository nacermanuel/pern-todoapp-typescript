import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallTareas } from "../../service/apiCallTareas";
import { apiCreateTareas } from "../../service/apiCreateTareas";
import { apiUpdateTarea } from "../../service/apiUpdateTarea";
import { apiDeleteTareas } from "../../service/apiDeleteTareas";
import { apiUpdateListTask } from "../../service/apiUpdateListTask";

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
        
        const { tareas } = thunkAPI.getState().todo_app ;

        const resp = await apiUpdateListTask(tareas)
        thunkAPI.dispatch(tareasSlice.actions.resetModified())
        
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
        resetModified:(state)=>{
            console.log('entro al reset modified');
            state.createdTask = []
            state.modifiedTask = []
            state.deletedTask = []
        },
        resetDeleted:(state)=>{
            
        },
        orderChange:(state,action)=>{
            state.tareas = [...action.payload]
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
export const { updateTarea, deleteTarea , createTarea, orderChange } = tareasSlice.actions