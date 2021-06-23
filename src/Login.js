import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login({ isAuth: isAuth }) {
    const history = useHistory();
    // let emptyMessage = "Campo obrigatório";
    const [emptyMessage, setemptyMessage] = useState("");
    // console.log('valor no Login é:', isAuth);

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
                // history.push('/user');
                history.push({
                    pathname: '/user',
                    // search: '?query=abc',
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
            {/* Testando para ver se routing a partir daqui funciona p/ limitar ele apenas com login */}
            {/* <Router>
                <Route path="/info" exact component={BaseUser} />
            </Router> */}
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
