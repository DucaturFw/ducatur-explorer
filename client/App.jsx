import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import theme from './styles/theme';
import './styles/styles.css';
import Explorer from './components/explorer';
import Header from './components/header';


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <Container>
                <Header />
                <Explorer/>
              </Container>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
