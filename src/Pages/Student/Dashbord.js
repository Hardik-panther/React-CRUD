import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Studentsdata from '../../component/Studentsdata'
import Sidebar from '../../component/Sidebar'
import Postservice from '../../Service/Postservice'

function Dashbord() {
  // const[dashbordData,setDashbordData]=useState([])

  // console.log("dashbordData->",dashbordData)

useEffect(()=>{
  Postservice.get_Data()
  .then((res)=>{
    // setDashbordData(res)
  })
  .catch((error)=>{
    console.log("getdata->",error)
  })
})

  return (
    <>
    {/* <Sidebar/> */}
    

      <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                   
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
