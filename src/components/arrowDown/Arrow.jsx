// import './arrow.css';
// import { BsChevronDown } from 'react-icons/bs';

// const Arrow = () => {
//   return (
//     <div>
//         <span>
//         <BsChevronDown
//           className="downArrow" 
//         />
//         </span>
//     </div>
//   );
// }

// export default Arrow;


import React from 'react';
import './arrow.css';
import { BsChevronDown } from 'react-icons/bs';

const Arrow = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <div className="arrow-container">
      <span onClick={scrollToBottom} className="downArrow">
        <BsChevronDown />
      </span>
    </div>
  );
};

export default Arrow;
