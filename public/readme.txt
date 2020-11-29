import AsideNavbar from './components/aside-navbar/AsideNavbar';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Report from './pages/reporter/Report';

<>
    <Router>
        <AsideNavbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' component={Product}/>
            <Route path='/reports' component={Report}/>
        </Switch>
    </Router>
</>