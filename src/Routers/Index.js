import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import MainList from '../Pages/MainList';
import Signup from '../Pages/Signup';
import Protect from '../ProtectedRoute/Protect';
import ProtectComponant from '../ProtectedRoute/ProtectComponant';
import RouterFile from './RouterFile';


function RouteIndex() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Protect  ><Login /></Protect>} />
                <Route path='/signup' element={<Signup />} />
                <Route element={<ProtectComponant><MainList /></ProtectComponant>}>
                    {RouterFile.map((elem, inx) => {
                        let { Component } = elem
                        return (
                            <Route exact path={elem.path} element={<Component />} key={inx} permission={elem.permission} />
                        )
                    })
                    }
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RouteIndex
