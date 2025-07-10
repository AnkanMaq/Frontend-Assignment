import React, { useState } from 'react';
import './Carousel.css';
 
const Carousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
 
    const pages = [
        {
            title: 'Carousel 1',
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ex libero inventore voluptas, eveniet voluptatem laborum fuga commodi eum quia.',
        },
        {
            title: 'Carousel 2',
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ex libero inventore voluptas, eveniet voluptatem laborum fuga commodi eum quia.',
        },
        {
            title: 'Carousel 3',
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ex libero inventore voluptas, eveniet voluptatem laborum fuga commodi eum quia.',
        },
    ];
 
    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    };
 
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };
 
    return (
        <div className="carousel">
            <div className="left-arrow" onClick={handlePreviousPage}></div>
            <div className='CarouselContent'>
                <h1>{pages[currentPage].title}</h1>
                <p>{pages[currentPage].content}</p>
                <button className='btn'>Explore</button>
            </div>
            <div className="right-arrow" onClick={handleNextPage}></div>
        </div>
    );
};
 
export default Carousel;