import { Link } from 'react-router-dom';

import './style.scss';

const Button = (props) => {
    const CustomStyle = {
        backgroundColor: props.type ? props.type : "indianred",
        color: props.color ? "black" : "white",
        padding: "10px",
        borderRadius: '4px',
        textDecoration: 'none',
    };
    return(
        <Link style={CustomStyle} className="defaultButton" to={props.link}>{props.children}</Link>
    );
};

export default Button;