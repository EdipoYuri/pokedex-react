import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Pokedex from './pages/pokedex/Pokedex';
import About from './pages/about/About'

const Container = styled.div`
  width: 100vw;
  min-height:100vh;
  height: 100%;
  background-color: aliceblue;
`

function App() {
  return (
    <Router>
      <Container>
        <Navbar />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Pokedex />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
