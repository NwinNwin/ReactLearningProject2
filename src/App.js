import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Place from './components/Place';
import data from './data';

function App() {

  const places = data.map(locate => {
    return (
    <Place {...locate}/>)
  })
  return (
    <div className="App">
      <Navbar/>
      {places}
    </div>
  );
}

export default App;
