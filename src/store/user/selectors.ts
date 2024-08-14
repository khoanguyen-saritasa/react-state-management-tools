import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

/** Selects all users from store. */
export const selectUsers = createSelector(
  [
    (state: RootState) => state.users.users,
    // (state: RootState) => state.users.age,
  ],
  (users) => {
    console.log("Memoirized Users");
    return users;
  }
);

/** Selects users loading state. */
export const selectAreUsersLoading = createSelector(
  (state: RootState) => state.users.isLoading,
  (isLoading) => isLoading
);
