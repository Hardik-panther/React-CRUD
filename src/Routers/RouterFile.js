
import { Component } from "react";
import Studentsdata from "../component/Studentsdata";
import MainList from "../Pages/MainList";
import Dashbord from "../Pages/Student/Dashbord";
import Signup from "../Pages/Student/Signup";
import StudentsData02 from "../Pages/StudentsForm/StudentsData02";
import StudentsData03 from "../Pages/StudentsForm/StudentsData03";
import StudentsForm from "../Pages/StudentsForm/StudentsForm";

const RouterFile = [
  // {
  //   path: "/MainList",
  //   component: MainList

  // },
  
  {
    path: "/mainlist",
  Component: Dashbord,

  },
  {
    path:"/mainlist/studentsform",
    Component:StudentsForm
  },
 {
   path:"/mainlist/studentsform/StudentsData02",
  Component:StudentsData02
},
{
  path:"/mainlist/studentsform/StudentsData03",
 Component:StudentsData03
}
               
  // {
  //   path:"Studentsdata",
  //   Component:Studentsdata
  // },
]

export default RouterFile
