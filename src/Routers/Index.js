import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Login from '../Pages/Login';
import MainList from '../Pages/MainList';
import Dashbord from '../Pages/Student/Dashbord';
import Signup from '../Pages/Student/Signup';
import RouterFile from './RouterFile';


function RouteIndex() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/mainlist' element={<MainList />}>
                    {RouterFile.map((elem,inx)=>{
                        let {Component} = elem
                        console.log(elem)
                       return(
                        <Route  exact path={elem.path} element={<Component/>} key={inx} />
                       )
                    })
                    }
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RouteIndex
