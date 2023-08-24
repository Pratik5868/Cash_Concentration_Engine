import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
                        //Pratik ka data modify kare ge
    .post("saveCompany",user)        // Back End connect to @PostMapping=SaveCompany
    .then((response)=>response.json())    //This is promise
}