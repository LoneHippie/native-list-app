import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchListsFromStorage, saveToStorage, removeListFromStorage } from './storageMethods';

export const fetchAsyncLists = createAsyncThunk('lists', () => {
    return fetchListsFromStorage();
});

const listInitialState = {
    lists: {
        status: 'idle',
        data: [],
        error: {}
    }
};

export const listsSlice = createSlice({
    name: "lists",
    initialState: listInitialState,
    reducers: {
        addList: (state, action) => {
            state.lists.data.push(action.payload);
            saveToStorage(action.payload);
        },
        removeList: (state, action) => {
            state.lists.data = state.lists.data.filter(list => list.id !== action.payload.id);
            removeListFromStorage(action.payload.id);
        }
    },
    extraReducers: {
        [fetchAsyncLists.pending.type]: (state, action) => {
            state.lists = {
                status: "loading",
                data: [],
                error: {}
            }
        },
        [fetchAsyncLists.fulfilled.type]: (state, action) => {
            state.lists = {
                status: "idle",
                data: action.payload,
                error: {}
            }
        },
        [fetchAsyncLists.rejected.type]: (state, action) => {
            state.lists = {
                status: "idle",
                data: [],
                error: action.payload
            }
        }
    }
});

export const { addList, removeList } = listsSlice.actions;

export default listsSlice.reducer;