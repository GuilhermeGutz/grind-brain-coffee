import { Routes, Route, Navigate} from "react-router-dom";
import { Home, About } from "../pages/Home";


export const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />

            <Route path="*" element={<Navigate to="/home"/>} /> {/*(not found redirect)*/}
        </Routes>
    ) 
}

