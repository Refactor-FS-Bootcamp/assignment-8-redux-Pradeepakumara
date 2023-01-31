import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Switch>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
