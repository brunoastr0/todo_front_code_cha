import {Routes, Route} from 'react-router';

import Home from '../pages/Home'
import Error from "../pages/Error";


function AppRoutes(){

    return (

        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="*" element = {<Error/>} />
        </Routes>
    )
}

export default AppRoutes;