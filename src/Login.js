import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login({ isAuth: isAuth }) {
    const history = useHistory();
    const [emptyMessage, setemptyMessage] = useState("");

    function requestUserData() {
        const username = document.querySelector('#txtInput').value;
        const xhr = new XMLHttpRequest();
        const url = `https://api.github.com/users/${username}`;
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status == 404) {
                console.log("erro 404 ocorreu!!!");
            } else {
                const data = JSON.parse(this.response);
                console.log('consegui!');

                isAuth(true);
                history.push({
                    pathname: '/user',
                    state: { detail: data }
                });
            }
        }
        xhr.send();
    }

    function checkEpty() {
        const username = document.querySelector('#txtInput').value;
        if (username == "") {
            setemptyMessage("Campo obrigatório");
        } else {
            setemptyMessage("");
        }
    }

    return (
        <>
            <div id="loginAll">
                <div id='logoPrincipal'>
                    <i class="fa fa-github"></i>
                </div>
                <div id="inputContainer">
                    <input id='txtInput' placeholder="Usuário" onChange={checkEpty}>
                    </input>
                    <span>{emptyMessage}</span>
                </div>
                <button onClick={requestUserData} id="btnSearch">
                    <span>Entrar</span>
                    <i class="fa fa-arrow-right"></i>
                </button>
            </div>
        </>
    );
}

export default Login;
