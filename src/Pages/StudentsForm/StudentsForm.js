import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StepWizard from 'react-step-wizard'
import Postservice from '../../Service/Postservice'
import StudentsData01 from './StudentsData01'
import StudentsData02 from './StudentsData02'
import StudentsData03 from './StudentsData03'

function StudentsForm() {
  const [sdata, setSData] = useState({})
  const param = useParams()

  useEffect(() => {
    Postservice.edit_Data(param.id)
      .then((res) => {
        setSData(res)
      })
  }, [])

  const studentsvalue = (data) => {
    setSData({ ...sdata, ...data })
  }
  return (
    <StepWizard>
      <StudentsData01 studentdata={studentsvalue} formdata={sdata} />
      <StudentsData02 studentdata={studentsvalue} formdata={sdata} />
      <StudentsData03 studentdata={studentsvalue} formdata={sdata} />
    </StepWizard>
  )
}

export default StudentsForm
