import React from 'react';
import './Nav.css';

function Nav({ location: location }) {
    // console.log('Location em Nav é: ', location.state.detail);

    return (
        <>
            <div id="navAll">
                <div class="navIcons">
                    <i class="fa fa-home"></i>
                    <span>Home</span>
                </div>
                <div class="navIcons">
                    <i class="fa fa-github"></i>
                    <span>Repos</span>
                </div>
                <div class="navIcons">
                    <i class="fa fa-users"></i>
                    <span>Seguidores</span>
                </div>
                <div class="navIcons">
                    <i class="fa fa-users"></i>
                    <span>Seguindo</span>
                </div>
            </div>
        </>
    );
}

export default Nav;
