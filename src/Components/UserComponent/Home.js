import React, {useState, useEffect} from 'react';
import Navbar1 from "../AdminComponent/Navbar1";
const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    return (
        <>
        <Navbar1/>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2> { show ? 'Happy, to see you back' :  'ONLINE EXAMINATION PORTAL' }</h2>
                </div>
            </div>
            
        </>
    )
}

export default Home;
