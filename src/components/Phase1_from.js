import React, { useState } from 'react'




function Phase1_from() {
    const [ID,setID] = useState("");    // We can store the value in this state variable
    const [Name,setName] = useState("");
    const [TotalSal,setTotalSal] = useState("");
    const [Allowance,setAllowance] = useState("");
    const [Date,setDate] = useState("");

    const [AllEntry,setAllEntry] = useState([]);

    const submitform = (event) =>{
        event.preventDefault(); // This wil prevent to refresh the pade by wite the preventDefault 
        // // if(!AllEntry.Id || !AllEntry.Name || !AllEntry.TotalSal|| !AllEntry.TotalSal || !AllEntry.Date)
        // {
        //     alert("These Fields are Mandatory")
        // }
        const newEntry = {CompanyID : ID , CompanyName : Name , Date : Date };

        setAllEntry([...AllEntry,newEntry]);    // These two data are connect with back end
        console.log(AllEntry);  // This data is also conncect to the back end using the axios library or nodejs we can connect to the back end
    }


  return (
    <div className='container container-fluid min-vh-100 d-flex justify-content-center align-items-center ' style={{width:"400px"}} >
     {/* style={{width:"400px"}} */}
     
      <form className='form-control border-primary' action='Project' onSubmit={submitform} >    
        {/* onsubmit event is use to submit the detail we have to define the onsubmit  */}
        {/* value is us to store the each value which is pass  */}
        <div>   
            <>Current Budget is </>
        </div>

        <div className='form-label text-center pb-2' >
            <label htmlFor='ID' >CompanyID : </label>
            <input className='form-'  type='text' name='ID' placeholder='Company ID'
             value={ID} onChange={(I) =>setID(I.target.value) } ></input>  
        </div>  

        <div className='form-label text-center pb-2'>
            <label htmlFor='Name' >CompanyName : </label>
            <input type='text' name='Name' placeholder='Company Name' value={Name} onChange={(N) =>setName(N.target.value) } ></input>
        </div>

        <div className='form-label text-center pb-2'>
            <label htmlFor='TotalSal' >TotalSal : </label>
            <input type='text' name='TotalSal' placeholder='Salary' value={TotalSal} onChange={(T) =>setTotalSal(T.target.value) }  ></input>
        </div>

        <div className='form-label text-center pb-2'>
            <label htmlFor='Allowance' >Allowance : </label>
            <input type='number' name='Allowance' placeholder='Allowance' value={Allowance} onChange={(A) =>setAllowance(A.target.value) } ></input>
        </div>

        <div className='form-label text-center pb-2'>
            <label htmlFor='Date' >Date : </label>
            <input type='date' name='Date' value={Date} onChange={(D) =>setDate(D.target.value) } ></input>   
        </div>

        <button className='btn btn-primary' type='submit' >submit</button> &nbsp;
        
      </form>
        <br></br>
        <div>
            {
                AllEntry.map((curElem)=> {
                    return(
                        <div className='border border-primary '>
                            <table className='table table-primary'>
                                <tr>
                                    <td>{curElem.CompanyID}</td>
                                    <td>{curElem.CompanyName}</td>
                                    <td>{curElem.Date}</td>
                                </tr>
                            </table>
                            
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Phase1_from
