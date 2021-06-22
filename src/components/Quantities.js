import React from 'react';
import './Quantities.css';

function Quantities({ location: location }) {

    return (
        <>
            <div id="quantitiesAll">
                <div class="quantitiesContainer">
                    <span class="quantitiesNumber">{location.state.detail.followers}</span>
                    <span>Seguidores</span>
                </div>
                <div class="quantitiesContainer">
                    <span class="quantitiesNumber">{location.state.detail.following}</span>
                    <span>Seguindo</span>
                </div>
                <div class="quantitiesContainer">
                    <span class="quantitiesNumber">{location.state.detail.public_repos}</span>
                    <span>Repos</span>
                </div>
            </div>
        </>
    );
}

export default Quantities;
