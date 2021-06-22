import React from 'react';
import './Pic.css';

function Pic({ location: location }) {

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
