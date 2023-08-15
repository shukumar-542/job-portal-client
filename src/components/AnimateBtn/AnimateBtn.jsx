/* eslint-disable react/prop-types */
import './style.css'
const AnimateBtn = ({text}) => {
    return (
        <button href="#" className="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text}
        </button>
    );
};

export default AnimateBtn;