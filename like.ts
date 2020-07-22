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
            likeButtonClick(){
                
                console.log('initial state is: ' + this.UserState)
                console.log('initial no of likes: ' + this._noOfLikes)

                
                // if (this.UserState == true){
                //     console.log('clicked')
                //     console.log('true case initial no of likes: ' + this._noOfLikes+ ' new no of likes: ' + (--this._noOfLikes))
                //     console.log('changed state is: ' + this.UserState)
                //     this._noOfLikes--
                // }else if (this.UserState == false) {
                //     console.log('clicked')
                //     console.log('false case initial no of likes: ' + this._noOfLikes+ ' new no of likes: ' + this._noOfLikes++)
                //     console.log('changed state is: ' + this.UserState)
                //     this._noOfLikes++
                // }

                //alternate way to write if else block
                this._noOfLikes += (this.UserState) ? -1 : +1
                this.UserState = !this.UserState

                
                console.log('initial state is: ' + this.UserState)
                console.log('initial no of likes: ' + this._noOfLikes)
                
                }

}



