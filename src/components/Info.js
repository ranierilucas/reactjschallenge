import React from 'react';
import './Info.css';

function Info({ location: location }) {
    // console.log('Info veio!');

    return (
        <>
            <div id="infoAll">
                <div id="infoName">
                    <div id="infoYellow"></div>
                    <span>{location.state.detail.name}</span>
                </div>
                <div id="infoMore">
                    <span class="infoEmail">{location.state.detail.email}</span>
                    <span class="infoLocation">{location.state.detail.location}</span>
                </div>
            </div>
        </>
    );
}

export default Info;
