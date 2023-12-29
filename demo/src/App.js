import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import First from './First';
import Second from './Second';
import Third from './Third';

function App() {
   return (
    <div className="App">
      {/* <Header/> */}
      <Slider/>
      <First/>
      <Second/>
      <Third/>
      <Footer/>
    </div>
  );
}

export default App;
