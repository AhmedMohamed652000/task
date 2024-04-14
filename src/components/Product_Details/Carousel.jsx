import React, { useState } from 'react';

function Carousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <div className="relative w-[50%]" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 duration-700 ease-in-out transition-all ${activeIndex === index ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img src={image} className="w-full h-full object-cover" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 cursor-pointer focus:outline-none bg-white/30 hover:bg-white/50"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 text-black" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9L1 5l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                type="button"
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 cursor-pointer focus:outline-none bg-white/30 hover:bg-white/50"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 text-black" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default Carousel;
