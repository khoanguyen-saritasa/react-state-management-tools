import { User } from "../../models/user";

/** Users state. */
export interface UsersState {

  /** Users list. */
  readonly users: User[];

  /** Error. */
  readonly error?: string;

  /** Whether the users are loading or not. */
  readonly isLoading: boolean;

  /** Age */
  readonly age: number
}

export const initialState: UsersState = {
  isLoading: false,
  users: [],
  age: 18
};
