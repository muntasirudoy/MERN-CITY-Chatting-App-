import * as alltypes from "../Actions/allTypes"

const initialstate ={
    currentGroup:null,currentGroupid :null,grpname:null
}

 const groupReducer =(state = initialstate, action)=>{

    switch(action.type){
        case( alltypes.setgroups):
        return {
            ...initialstate,
            currentGroup : action.payload.currentgroup,
            currentGroupid : action.payload.currentgroup.id,
            grpname : action.payload.currentgroup.groupname,
        }
        default : return state
    }
}

export default groupReducer