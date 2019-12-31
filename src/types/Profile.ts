import {IUser} from "./User";

export interface IProfile {
   id: string;
   user: IUser;
   backgroundImageURL: string;
   selfDescription: string;
   createdAt: number;
}
