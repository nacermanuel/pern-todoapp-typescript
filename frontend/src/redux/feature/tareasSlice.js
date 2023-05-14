import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallTareas } from "../../service/apiCallTareas";
import { apiUpdateListTask } from "../../service/apiUpdateListTask";

const initialState = {
    loading: false,
    tareas: [],
    error: '',
    nowTask: [],
    completedTasks: [],
    todo:[]

} ;

const fetchTareas = createAsyncThunk('tareas/fetchTareas', apiCallTareas)

const updateDataBase = createAsyncThunk(
    'todo_app/updateTareas',
    async (_,thunkAPI) => {
        
        const {  nowTask , completedTasks, todo } = thunkAPI.getState().todo_app ;
        const tareas = [...todo, ...nowTask, ...completedTasks]
        thunkAPI.dispatch(tareasSlice.actions.setTareas(tareas))
        const resp = await apiUpdateListTask(tareas)
    })

const tareasSlice = createSlice({
    name: 'todo_app',
    initialState,
    reducers: {
        updateTarea: (state, action)=>{
            const index = state.todo.findIndex((e) => e.id == action.payload.id)
            state.todo[index] = action.payload
        },
        updateTaskNow:(state, action)=>{
            state.nowTask = [action.payload]
        },
        deleteTarea: (state, action) => {
            state.todo = [...state.todo.filter(e=> e.id != action.payload)]
        },
        createTarea: (state, action) => {
            state.todo.push(action.payload)
        },
        setTareas:(state,action)=>{
            state.tareas = action.payload
        },
        orderChange:(state,action)=>{
            state.todo = [...action.payload]
        },
        setNowTask:(state, action)=>{
            state.todo = [...state.todo.filter(e=> e.id != action.payload.id)]
            state.nowTask = [action.payload]           
        },
        setCompleated:(state,action)=>{
            state.completedTasks.push(action.payload)
            state.nowTask = []
        },
        backtoPending:(state, action)=>{
            state.todo.unshift(action.payload)
            state.nowTask = []
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
            state.todo = action.payload.filter(e=> e.now === false && e.complete === false)
            state.nowTask = action.payload.filter(e=> e.now === true)
            state.completedTasks = action.payload.filter(e=> e.complete === true)

        })
        builder.addCase(fetchTareas.rejected, (state, action) => {
            state.loading = false
            state.tareas = []
            state.error = `API Call fetchTareas rechazado: ${action.error.message}`
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
export const { updateTarea, deleteTarea , createTarea, orderChange, setNowTask, backtoPending , updateTaskNow, setCompleated} = tareasSlice.actions