import {IUser} from "./User";

export interface IGroup {
    id:string;
    name: string;
    imageURL: string;
    members: IUser[];
    createdAt: number;
}
