import React from 'react';
import './Nav.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation(); //Onde os dados estão
    const history = useHistory();

    function headHome() {
        history.replace({ pathname: '/user', state: { detail: location.state.detail } })
    }
    function headRepos() {
        const url = `https://api.github.com/users/${location.state.detail.login}/repos`;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                history.replace({ pathname: '/repos', state: { detail: location.state.detail, more: json } })
            })
    }

    return (
        <>
            <div id="navAll">
                <div class="navIcons" onClick={headHome}>
                    <i class="fa fa-home"></i>
                    <span>Home</span>
                </div>
                <div class="navIcons" onClick={headRepos}>
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
