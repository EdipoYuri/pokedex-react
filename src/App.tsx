import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Pokedex from './pages/pokedex/Pokedex'
import Footer from './components/Footer/Footer'

const Container = styled.div`
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
          <Route exact path='/'>
            <Pokedex />
          </Route>
        </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
