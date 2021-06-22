import React from 'react';
import './Bio.css';

function Bio({ location: location }) {
    // console.log('Info veio!');

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
