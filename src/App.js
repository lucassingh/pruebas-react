import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Adidas from './pages/adidas/Adidas';
import Nike from './pages/nike/Nike';
import Puma from './pages/puma/Puma';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={ Adidas }/>
                <Route path='/nike' component={ Nike }/>
                <Route path='/puma' component={ Puma }/>
                <Route path='/shop' component={ Shop }/>
            </Switch>
        </Router>        
    </>
  );
}

export default App;
