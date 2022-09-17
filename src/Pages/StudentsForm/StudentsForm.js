import React, { useState } from 'react'
import StepWizard from 'react-step-wizard'
import StudentsData01 from './StudentsData01'
import StudentsData02 from './StudentsData02'
import StudentsData03 from './StudentsData03'

function StudentsForm() {
    // const [sdata,setSData]=useState([])

    const studentsvalue=(data)=>{
        // setSData({...sdata,...data})
        console.log("studentsvalued data->",data)

    }
  return (
    <StepWizard>
      <StudentsData01 studentdata={studentsvalue} />
      <StudentsData02 studentdata={studentsvalue}/>
      <StudentsData03 studentdata={studentsvalue}/>
    </StepWizard>
  )
}

export default StudentsForm
