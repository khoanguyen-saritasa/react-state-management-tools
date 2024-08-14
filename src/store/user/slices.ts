import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';
import { fetchUsers } from './dispatcher';
import { initialState } from './state';


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setList(state,action: PayloadAction<User[]>) {
        state.users = action.payload
    },
    setAge(state,action: PayloadAction<number>) {
        state.age = action.payload
    }
  },
  extraReducers: builder => builder
    .addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    }),
});
