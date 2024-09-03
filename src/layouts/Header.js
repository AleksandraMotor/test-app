import { Route, Routes } from 'react-router-dom';
import img1 from '../assets/header1.jpg';
import img2 from '../assets/header2.jpg';
import img3 from '../assets/header3.jpg';
import img4 from '../assets/header4.jpg';
import img5 from '../assets/header5.jpg';

import '../styles/Header.css';

const Header = () => {
    return (
        <Routes>
            <Route path='/' element={<img src={img1} alt='city'/>}/>
            <Route path='/products' element={<img src={img2} alt='city2'/>}/>
            <Route path='/contact' element={<img src={img3} alt='city3'/>}/>
            <Route path='/admin' element={<img src={img4} alt='city4'/>}/>
            <Route path='*' element={<img src={img5} alt='city5'/>}/>
        </Routes>
    );
};

export default Header;