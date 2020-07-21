export class LikeComponent{
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
            likeButtonClick(lc){
                
                console.log('initial state is: ' + lc.UserState)
                console.log('initial no of likes: ' + lc._noOfLikes)
                if (lc.UserState == true){
                    console.log('clicked')
                    console.log('true case initial no of likes: ' + lc._noOfLikes+ ' new no of likes: ' + (lc._noOfLikes-1))
                    lc.UserState= false
                    console.log('changed state is: ' + lc.UserState)
                    return ++lc._noOfLikes
                }else if (lc.UserState == false) {
                    console.log('clicked')
                    console.log('false case initial no of likes: ' + lc._noOfLikes+ ' new no of likes: ' + (lc._noOfLikes+1))
                    lc.UserState = true
                    console.log('changed state is: ' + lc.UserState)
                    return lc._noOfLikes
                }  
                
                }

}



