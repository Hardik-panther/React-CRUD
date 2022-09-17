import React from 'react'

function StudentsItem({students}) {
    // const[]=useState('')
    
    const{name,Fathers_Name,Mothers_Name,Contact_No,Address,City,Standard}=students;
    console.log(students)
    return (
        <div>
            <tr className="table-primary">
                <td>{name}</td>
                <td>{Fathers_Name}</td>
                <td>{Mothers_Name}</td>
                <td>{Contact_No}</td>
                <td>{Address}</td>
                <td>{City}</td>
                <td>{Standard}</td>
                <td>
                    <div className="d-flex gap-3">
                        <span type="button" className="badge bg-success" >Edit</span>
                        <span type="button" className="badge bg-danger" >Delete</span>
                    </div>
                </td>
            </tr>
            {/* {students.map((student)=>(
                <div>
                    <p>{student.name}</p>
                </div> */}
            {/* ))} */}
        </div>
    )
}

export default StudentsItem
