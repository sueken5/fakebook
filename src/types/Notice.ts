import {IUser} from "./User";

export interface INotice {
   id: string;
   user: IUser;
   createdAt: number;
   text: string;
}

