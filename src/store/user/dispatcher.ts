import { createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "../../models/user";

const mockUsers: User[] = [
  new User({ id: 1, name: "Khoa Nguyen" }),
  new User({ id: 2, name: "Hoang Y" }),
  new User({ id: 3, name: "Gia Bao" }),
];

function getUsers(): Promise<User[]> {
  return new Promise((resolve) => setTimeout(() => resolve(mockUsers), 500));
}

export const fetchUsers = createAsyncThunk("users/fetch", (_, action) => {
  return getUsers();
});
