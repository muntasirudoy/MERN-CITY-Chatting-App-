import * as alltypes from "../Actions/allTypes"

const initialstate ={
    currentUser : null,
}

 const userReducer =(state =initialstate, action)=>{
    switch(action.type){
        case( alltypes.setuser):
        return {
            currentUser : action.payload.currentUser.displayName,
            userid : action.payload.currentUser.uid
        }
        case( alltypes.clearuser):
        return {
            ...initialstate
        }
        default : return state
    }


}

export default userReducer