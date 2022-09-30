import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Postservice from '../../Service/Postservice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


function Dashbord() {
  const navigate = useNavigate()
  const [dashbordData, setDashbordData] = useState([])

  const handleClick = (id) => {
    console.log("edit", id)
    navigate("/studentsform/" + id)
  }

  const handleDelete = (id, elem) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((res) => {
        if (res) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
        Postservice.delete_Data(id, elem)
          .then((res) => {
            setDashbordData(res)
          })
      })
  }

  useEffect(() => {

    Postservice.get_Data()
      .then((res) => {
        setDashbordData(res)
      })
      .catch((error) => {
      })
  }, [])

  return (
    <>
      <div className='d-flex align-items-center'>
        <div>
          <h4 className='mx-5 mt-2'>Student Data</h4>
        </div>
        <div className='mt-2 ml-auto'>
          <button type="button" className="btn btn-primary btn-block" onClick={() => { navigate("/studentsform") }} >Create Student</button>
        </div>
      </div>
      <div className="mt-2 row">
        <div className="col-12">
          <div className="card">
            <div className="card-body table-responsive p-0">
              <ToastContainer />
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Father_name</th>
                    <th>Mother_Name</th>
                    <th>Contact No</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    {/* <th>School</th> */}
                    <th>Standard</th>
                    <th>Mark</th>
                    {/* <th>Image</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dashbordData.map((elem, inx) => {
                    return (
                      <tr key={inx}>
                        <td>{elem.id}</td>
                        <td >{elem.name}</td>
                        <td >{elem.father_name}</td>
                        <td>{elem.mother_name}</td>
                        <td>{elem.contact_no}</td>
                        <td>{elem.address}</td>
                        <td>{elem.city}</td>
                        <td>{elem.state}</td>
                        <td>{elem.country}</td>
                        {/* <td>{elem.school}</td> */}
                        <td>{elem.standard}</td>
                        <td>{elem.mark}</td>
                        {/* <td>{elem.image}</td> */}
                        <td>
                          <div>
                            <button className='btn-primary mx-2' onClick={() => { handleClick(elem.id, elem) }}><i className="fa-solid fa-pen-to-square"></i></button>
                            <button className='btn-danger' onClick={() => { handleDelete(elem.id, elem) }}><i className="fas fa-trash"></i></button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashbord
