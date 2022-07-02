import Header from "./Header";
import AnimatedRoutes from "./AnimatedRoutes";
import { DESSERT } from "../shared/dessert";






export default function Main(){
    

    return(
        <>
            <Header/>
            <AnimatedRoutes
            dish={DESSERT}
            >

            </AnimatedRoutes>
        </>
    )
}



