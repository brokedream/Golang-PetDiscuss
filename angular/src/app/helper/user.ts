export const UserHelper={
    getUser:()=>{
      return  JSON.parse(localStorage.getItem("user")).user
    },
    setUser:(data)=>{
      localStorage.setItem("user",JSON.stringify(data))  
    },
    Exist:()=>{
        if(localStorage.getItem("user")!=null){
            return true
        }else{
            return false
        }
    },
    RemoveUser:()=>{
        localStorage.removeItem("user")
    }
}