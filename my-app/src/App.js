import './App.css';
import Banner from './Components/Banner/Banner';
import Categories_Banner from './Components/Categories_Banner/Categories_Banner';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Categories_Banner catagroy={"Men"}/>
      <Categories_Banner catagroy={"Women"}/>
      <Categories_Banner catagroy={"Kid"}/>
    </div>
  );
}

export default App;
