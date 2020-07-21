//importing the module point which is inside the same directory or package --> ./
import {LikeComponent} from './like'

//Object 
let lc = new LikeComponent(0,false);
let like = lc.Likes
let flag = lc.UserState
lc.Likes = 99
lc.UserState = true
lc.likeButtonClick(lc)

