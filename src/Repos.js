import React from 'react';
import Nav from './components/Nav';
import { useLocation } from 'react-router-dom';
import './Repos.css';


function Repos() {
    const location = useLocation(); //Onde os dados estão
    const data = location.state.more;
    console.log(data[0].stargazers_count);

    const Repository = function (props) {
        return (
            <>
                <div id="repoAll">
                    <div id="repoName">
                        <div id="repoYellow"></div>
                        <span>{props.name}</span>
                    </div>
                    <div id="repoMore">
                        <span class="repoDescription"> {props.description}</span>
                    </div>
                    <div id="repoIcons">
                        <div id="">
                            <i class="fa fa-star"></i>
                            <span> {props.stargazers} </span>
                        </div>
                        <div id="repoSymbols">
                            <i id="repoUnlocked" class="fa fa-unlock-alt"></i>
                            <i id="repoLocked" class="fa fa-lock"></i>
                        </div>
                    </div>
                    <hr />
                </div>
            </>
        )
    }

    return (
        <>
            <div id="reposAll">
                <h1> Repositórios </h1>
                {data.map(info => <Repository name={info.name} description={info.description} stargazers={info.stargazers_count} />)}
                <Nav location={location.state.detail} />
            </div>
        </>
    );
}

export default Repos;
