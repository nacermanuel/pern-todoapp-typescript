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
export { fetchTareas }