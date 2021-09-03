import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from  './components/Chat'

import styled from "styled-components";
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
