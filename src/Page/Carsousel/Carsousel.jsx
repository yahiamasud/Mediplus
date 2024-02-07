import React from 'react';
import cosol1 from './../../../public/slider.jpg'
import cosol2 from './../../../public/slider2.jpg'
import cosol3 from './../../../public/slider3.jpg'


const Carsousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide2" className="carousel-item relative w-full">
                <img src={cosol1} className="w-full h-[700px]" />
                
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className='bg-red-200'>
                    <h1>this is the home add text</h1>
                    <p>this is the box</p>
                    </div>
                    <a href="#slide3" className="btn btn-circle ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={cosol2}className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h2>this is the home add text</h2>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={cosol3} className="w-full" />
                <h2>this is the home add text</h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <h2>this is the home add text</h2>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carsousel;