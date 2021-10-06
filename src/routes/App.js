import '../styles/Global.scss';
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/recovery-password' component={RecoveryPassword} />
            <Route component={NotFound} path="*"/>
         
        </Switch>
        </Layout>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
