import { useEffect, type FC } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchUsers } from "./store/user/dispatcher";
import { selectAreUsersLoading, selectUsers } from "./store/user/selectors";

export const ReduxDemo: FC = () => {
  // const users = useAppSelector((state) => {
  //   console.log("Not Memoirized Users")
  //   return state.users.users
  // });
  // const isUsersLoading = useAppSelector(
  //   (state: RootState) => state.users.isLoading
  // );

  const users = useAppSelector(selectUsers)
  const isUsersLoading = useAppSelector(selectAreUsersLoading)

  const dispatch = useAppDispatch();

  const refetchUsers = () => {
    // dispatch(usersSlice.actions.setAge(12))
    dispatch(fetchUsers());
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {isUsersLoading && <p>Loading ...</p>}
      {!isUsersLoading && users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
      <button onClick={refetchUsers}>Refetch users</button>
    </div>
  );
};
