import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movie/:id' component={SingleMovie} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
