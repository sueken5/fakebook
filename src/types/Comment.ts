import {IUser} from "./User";

export interface IComment {
   id: string;
   user: IUser;
   createdAt: number;
   text: string;
}
