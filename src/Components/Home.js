import MyCarousel from "./Carousel"
import SelectMenu from "./SelectMenu "
import Suggested from "./suggestedMenu"
export default function Home(){
    return(
        <div className="containrer">
            <SelectMenu/>
            <MyCarousel/>
            <Suggested/>

        </div>

    )
}