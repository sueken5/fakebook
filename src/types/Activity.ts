import {IUser} from "./User";
import {IComment} from "./Comment";

export interface IActivity {
    id: string;
    user: IUser;
    text: string;
    createdAt: number;
    goodCount: number;
    shareCount: number;
    comments: IComment[];
}

// { "id": "p-111",
//     "user": {
//     "id": "u-111",
//         "name": "猫太郎",
//         "iconURL":
//     "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
// },
//     "text": "hello world",
//     "createdAt": 1577675589
// }
