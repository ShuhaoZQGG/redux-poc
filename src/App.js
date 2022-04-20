import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
