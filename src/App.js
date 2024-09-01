import { Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import { Container } from "react-bootstrap";
import './api/axiosDefault';
import NavBar from './components/NavBar';
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
       <NavBar/>
       <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home Page</h1>}></Route>
          <Route exact path="/signin" render={()=> <h1>Singn in</h1>}></Route>
          <Route exact path="/signup" render={()=> <SignUpForm/>}></Route>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
       </Container>
    </div>
  );
}

export default App;