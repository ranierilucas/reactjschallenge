import React from 'react';
import './Bio.css';
import { useLocation } from 'react-router-dom';

function Bio() {
    const location = useLocation(); //Onde os dados estão

    return (
        <>
            <div id="bioAll">
                <div id="BioTitle">
                    <div id="infoYellow"></div>
                    <span>Bio</span>
                </div>
                <div id="bioTextContainer">
                    <span id="bioText">{location.state.detail.bio}</span>
                </div>
            </div>
        </>
    );
}

export default Bio;
