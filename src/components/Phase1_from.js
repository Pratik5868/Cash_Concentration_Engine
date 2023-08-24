import React, { useState } from 'react'
import { signUp } from '../services/user-service';



function Phase1_from() {
    const [CompanyID,setID] = useState("");    // We can store the value in this state variable
    const [CompanyName,setName] = useState("");
    const [Total_Monthly_Salary,setTotalSal] = useState("");
    const [Total_Monthly_Allowance,setAllowance] = useState("");
    const [DataAddedDate,setDate] = useState("");

    const [AllEntry,setAllEntry] = useState([]);

    const submitform = (event) =>{
        event.preventDefault(); // This wil prevent to refresh the pade by wite the preventDefault 
        // // if(!AllEntry.Id || !AllEntry.Name || !AllEntry.TotalSal|| !AllEntry.TotalSal || !AllEntry.Date)
        // {
        //     alert("These Fields are Mandatory")
        // }
        const newEntry = {CompanyID : CompanyID , CompanyName : CompanyName , Date : DataAddedDate };

        setAllEntry([...AllEntry,newEntry]);    // These two data are connect with back end
        console.log(AllEntry);  // This data is also conncect to the back end using the axios library or nodejs we can connect to the back end
        
        //Call server api for sending data(AllEntry)
        signUp(AllEntry).then((resp)=>{ // then is working like try in java
            console.log(resp)
            console.log("Sucess Log")
        }).catch((error)=>{
            console.log(error)
            console.log("Error Log")
        })


    }


  return (
    // 'container container-fluid min-vh-100 d-flex justify-content-center align-items-center'
    <div className='container container-fluid col-5'>
     {/* style={{width:"400px"}} */}
     
      <form className='form-label text-center' action='Project' onSubmit={submitform} >    
        {/* onsubmit event is use to submit the detail we have to define the onsubmit  */}
        {/* value is us to store the each value which is pass  */}
        
           
            <>Current Budget is </> &nbsp;
            <br></br>
            <label className='form-lable' >CompanyID </label>
            <input className='form-control'  type='text' name='CompanyID' placeholder='Company ID'value={CompanyID} onChange={(I) =>setID(I.target.value) } ></input>  
            
            <label className='form-lable' >CompanyName</label>        
            <input className='form-control' type='text' name='CompanyName' placeholder='Company Name' value={CompanyName} onChange={(N) =>setName(N.target.value) } ></input>
       
            <label className='form-lable'>Date : </label>
            <input className='form-control'  type='date' name='DataAddedDate' value={DataAddedDate} onChange={(D) =>setDate(D.target.value) } ></input>   

            <label className='form-lable'>TotalSal : </label>
            <input className='form-control' type='text' name='Total_Monthly_Salary' placeholder='Salary' value={Total_Monthly_Salary} onChange={(T) =>setTotalSal(T.target.value) }  ></input>
       
            
            <label className='form-lable'>Allowance : </label>
            <input className='form-control' type='number' name='Total_Monthly_Allowance' placeholder='Allowance' value={Total_Monthly_Allowance} onChange={(A) =>setAllowance(A.target.value) } ></input>
        

        <button type="submit" class="btn btn-primary">Submit</button>
        {/* goes to new line  */}
      </form>
        <br></br>
        
        {/* <div>
            {
                AllEntry.map((curElem)=> {
                    return(
                        <div className='border border-primary '>
                            <table className='table table-primary'>
                                <tr>
                                    <td>{curElem.CompanyID}</td>
                                    <td>{curElem.CompanyName}</td>
                                    <td>{curElem.DataAddedDate}</td>
                                </tr>
                            </table>       
                        </div>
                    )
                })
            }
        </div> */}

    </div>
  )
}

export default Phase1_from

/*
what is axios?
=> It is the upgraded version of the fetch api 

Advantages
1.when we call the axios by default it is json formate
2.with help of axios we use all http methods(get ,post, put,patch)

*/