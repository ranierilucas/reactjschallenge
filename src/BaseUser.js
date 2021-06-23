import React from 'react';
//estamos trabalhando com route sem estar diretamente em um route, logo:
import Nav from './components/Nav';
import Info from './components/Info';
import Pic from './components/Pic';
import Bio from './components/Bio';
import Quantities from './components/Quantities';
import Logout from './components/Logout';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BaseUser() {
  const location = useLocation(); //Onde os dados estão
  // console.log('Data is:')
  // console.log(location.state.detail);

  return (
    <>
      <Logout location={location} />
      <Pic location={location} />
      <Info location={location} />
      <Quantities location={location} />
      <Bio location={location} />
      <Nav location={location} />
    </>
  );
}

export default withRouter(BaseUser);
