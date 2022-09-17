import React, { useState } from 'react'
import StudentsItem from './StudentsItem'

function StudentList() {
    const[students,setStudents]=useState([])
    // console.log(students)
    return (
        <div>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Language</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
            </tr>
            <tbody>
                {
                    students.map((student) => <StudentsItem setStudents={setStudents}  />)
                }
            </tbody>
        </div>
    )
}

export default StudentList
