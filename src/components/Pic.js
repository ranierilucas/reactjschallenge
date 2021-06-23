import React from 'react';
import './Pic.css';
import { useLocation } from 'react-router-dom';


function Pic() {
    const location = useLocation(); //Onde os dados estão


    return (
        <>
            <div id="picAll">
                <div id="picPhoto">
                    <img src={location.state.detail.avatar_url} />
                </div>
                <div id="picBackground"></div>
            </div>
        </>
    );
}

export default Pic;
