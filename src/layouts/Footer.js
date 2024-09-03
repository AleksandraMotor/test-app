import '../styles/Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    let location = useLocation();
    const pathArray1 = window.location.pathname.split('/');
    const pathArray2 = window.location.pathname;
    const pathArray3 = location.pathname.split('/');
    const pathArray4 = location.pathname;

    return (
        <div>
            <h2>Stopka</h2>
            <h3>Jestes na stronie:</h3>

            {/* <p>---------------------</p>
            {/* window.location.pathname.split('/') = */}
            {/* window.location.pathname = */}
            <p> {pathArray1} = {pathArray2}</p>
            <p>---------------------</p>
            {/* location.pathname.split('/') =  */}
            {/* location.pathname =  */}
            <p>{pathArray3} = {pathArray4}</p>
            <p>---------------------</p>
            <p>{pathArray1[1]} = {location.pathname.split('/')[1]}</p>
            <p>---------------------</p>
            <p>{pathArray1[2]} = {location.pathname.split('/')[2]}</p>
            <p>---------------------</p>
            <p>{pathArray3[1]} -{'>'} {pathArray3[2]}</p>
            <p></p>
        </div>
    );
};

export default Footer;

