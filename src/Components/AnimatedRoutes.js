import Dessert from "./Dessert";
import Appertizers from "./Appetizers";
import Enteries from "./Enteries";


import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes,useParams, useLocation} from 'react-router-dom'
import Home from "./Home";



export default function AnimatedRoutes(props){
    return(
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="appertizers" element={<Appertizers/>}/>
                <Route path="enteries"  element={<Enteries/>}/>
                <Route path="dessert"   element={<Dessert des={props.desserts}/>}/>
            </Routes>
        </AnimatePresence>
    )
}