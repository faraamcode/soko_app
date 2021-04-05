import logo from './logo.svg';
import './App.css';
import {Footer,Home ,Navbar, EmptyProduct, Product} from './component/'

function App() {
  return (
    <>
     <Navbar/>
     <Product/>
     {/* <EmptyProduct/> */}
     {/* <Home/> */}
     <Footer/>
    </>
  );
}

export default App;
