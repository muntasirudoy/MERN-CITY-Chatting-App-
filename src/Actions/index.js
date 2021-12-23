import * as alltypes from './allTypes'



export const setuser =(user)=>{
    
return{
    type: alltypes.setuser,
    payload:{
        currentUser: user
    }
}

}

export const clearuser =()=>{
    
    return{
        type: alltypes.clearuser
    }
    
    }

export const setgroups =(groups)=>{
        return{
            type: alltypes.setgroups,
            payload:{
                currentgroup: groups
            }
        }
        
        }
    






