import React from 'react';
import './Logout.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Logout() {
    const history = useHistory();
    const location = useLocation(); //Onde os dados estão


    function redirecting() {
        history.push({
            pathname: '/',
        });
    }

    return (
        <>
            <div id="logoutAll">
                <div>
                    <div id="logoutLogin">
                        <span id="logoutUser">#{location.state.detail.login}</span>
                    </div>
                    <div id="logoutExit" onClick={redirecting}>
                        <span>Sair</span>
                        <i class="fa fa-sign-out"></i>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Logout;
