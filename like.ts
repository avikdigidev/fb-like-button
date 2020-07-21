class likeComponent{
    constructor(private _noOfLikes?:number, private _state?:boolean){
     
        this._noOfLikes = _noOfLikes;
        this._state = _state;
    }
    //getter setter
    get Likes(){
        return this._noOfLikes
    }
    set Likes(value){
        if (value < 0 )
            throw new Error ('value cannot be less than 0')
        this._noOfLikes = value
    }
    //getter setter
    get UserState(){
        return this._state
    }
    set UserState(boolean){
               this._state = boolean
    }

            //function
            likeButton(lc){
                
                console.log('initial state is: ' + lc.UserState)
                console.log('initial no of likes: ' + lc._noOfLikes)
                if (lc.UserState == true){
                    console.log('true case initial no of likes: ' + lc._noOfLikes+ ' total no of likes: ' + (lc._noOfLikes+1))
                    return ++lc._noOfLikes
                }else if (lc.UserState == false) {
                    console.log('false case initial no of likes: ' + lc._noOfLikes)
                    return lc._noOfLikes
                }  
                
                }

}

//Object 
let lc = new likeComponent(0,false);
let like = lc.Likes
let flag = lc.UserState
lc.Likes = 99
lc.UserState = true
lc.likeButton(lc)



