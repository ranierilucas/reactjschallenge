import React from 'react';
import './Logout.css';

function Logout({ location: location }) {

    return (
        <>
            <div id="logoutAll">
                <div>
                    <div id="logoutLogin">
                        <span id="logoutUser">{location.state.detail.login}</span>
                    </div>
                    <div id="logoutExit">
                        <span>Sair</span>
                        <i class="fa fa-sign-out"></i>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Logout;
