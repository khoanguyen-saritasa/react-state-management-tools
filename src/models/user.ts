import { Immerable, OmitImmerable } from './immerable';

/** User. */
export class User extends Immerable {

  /** Id. */
  public id: number;

  /** Name. */
  public name: string;

  public constructor(data: UserInitArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

type UserInitArgs = OmitImmerable<User>;
