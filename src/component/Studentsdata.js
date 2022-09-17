import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import StudentList from './StudentList'

function Studentsdata() {
    const[inputvalue,setInputValue]=useState("")
    // console.log(inputvalue)
    const{register,handleSubmit}=useForm()
    const onSubmit =()=>{
        setInputValue({name:"",Fathers_Name:"",Mothers_Name:"",Contact_No:"",Address:"",City:"",Standard:""})
    }
    const handleChange = (event) =>{
        setInputValue({
            // ...inputvalue,
            [event.target.name]: event.target.value
        });
    };
    // const[inputvalue,setInputValue]=useState("")
        // const handleChange =({target})=>{
        //     setInputValue({
        //         ...inputvalue,
        //         [target.name]: target.value,     
        //     })
        // }


    return (
        <>
        <div className='container'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" name='Name' {...register("firstname", { required: true })} value={inputvalue.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Fathers_Name" className="form-label">Father's Name</label>
                    <input type="text" className="form-control" id="Fathers_Name" name="Fathers_Name" aria-describedby="emailHelp" value={inputvalue.Fathers_Name} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="Mothers_Name" className="form-label">Mother's Name</label>
                    <input type="text" className="form-control" id="Mothers_Name" name="Mothers_Name" aria-describedby="emailHelp" value={inputvalue.Mothers_Name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Contact_No" className="form-label">Contact_No.</label>
                    <input type="text" className="form-control" id="Contact_No" name='Contact_No' aria-describedby="emailHelp" value={inputvalue.Contact_No} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Address" name='Address' aria-describedby="emailHelp" value={inputvalue.Address} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="City" className="form-label">City</label>
                    <input type="text" className="form-control" id="City" name='City' aria-describedby="emailHelp" value={inputvalue.City} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Standard" className="form-label">standard</label>
                    <input type="text" className="form-control" id="Standard" name='Standard' aria-describedby="emailHelp" value={inputvalue.Standard} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        {/* <StudentList/> */}
        
        </>
    )
}

export default Studentsdata
