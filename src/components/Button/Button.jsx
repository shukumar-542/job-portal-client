/* eslint-disable react/prop-types */
import './style.css'
const Button = ({text}) => {
    return (
        <div className="frame">
            <button className="custom-btn btn-3"><span>{text}</span></button>   
        </div>
    );
};

export default Button;