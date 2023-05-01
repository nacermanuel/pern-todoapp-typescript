import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallTareas } from "../../service/apiCallTareas";

const initialState = {
    loading: false,
    tareas: [],
    error: ''
} ;

const fetchTareas = createAsyncThunk('tareas/fetchTareas', apiCallTareas)


const tareasSlice = createSlice({
    name: 'tareas',
    initialState,
    reducers: {
        updateTarea: (state, action)=>{
            const index = state.tareas.findIndex((e) => e.id == action.payload.id)
            state.tareas[index] = action.payload
        },
        deleteTarea: (state, action) => {
            state.tareas = [...state.tareas.filter(e=> e.id != action.payload)]
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
    }
})

export default tareasSlice.reducer ;
export { fetchTareas}
export const { updateTarea, deleteTarea } = tareasSlice.actions