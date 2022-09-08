import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './componentes/Header';
import NavBar from "./componentes/NavBar"
import History from './componentes/History';
import Artists from './componentes/Artists';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <History />
      <Artists />

    </div>
  );
}

export default App;
