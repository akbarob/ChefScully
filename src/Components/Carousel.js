import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import { useState } from 'react';
import { auto } from '@popperjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyCarousel() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);
  
    // Sample items for Carousel
    const items = [
        {
            caption: 'Sample Caption One',src: 
'images/pie di.png',
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two',src: 
'images/loaf.png',
            altText: 'Slide Two',
            rating: <FontAwesomeIcon icon="fa-solid fa-star "/>
        }
    ];
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} className="c-item"/>
                <CarouselCaption
            captionHeader={item.caption}
            captionText= {item.rating}
            className="text-danger"
      />
            </CarouselItem>
        );
    });
  
    return (
        <div className='col-7 mx-auto text-center' style={{
            display: 'block',  padding: 30
        }}>
            <h8 className>POPULAR ITEMS</h8>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}
                className="col-auto my-5">
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} 
                />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
    );
}
  
export default MyCarousel;