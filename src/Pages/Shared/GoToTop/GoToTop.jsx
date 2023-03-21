import React from 'react';
import "./GoToTop.css"
import { BsArrowUp } from 'react-icons/bs';

const GoToTop = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='scrollTop' onClick={scrollToTop}>
            <BsArrowUp></BsArrowUp>
        </div>
    );
};

export default GoToTop;