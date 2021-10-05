import logo from './logo.svg';
import './styles/Global.scss';
import { Layout } from "./containers/Layout";
import {Login} from "./containers/Login";
function App() {
  return (
    <div className="App">
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
