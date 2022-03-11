
import './App.css';
import Home from './Pages/Home';
import  Features   from './Pages/Features';
import Promo from './Pages/Promo'
import Signin from './Pages/SignIn';
import Cart from './components/Cart';

function App() {
  return (
    
    <div className = "APP">

        <Home />
        <Features />
        <Promo />
        <Signin />
        <Cart />

    </div>


  );
}

export default App;
