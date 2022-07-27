import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <div className="FilmCard">
        <Stars/>
      </div>
      <div className="FilmCard">
        <Stars count={1} />
      </div>
      <div className="FilmCard">
        <Stars count={3} />
      </div>
      <div className="FilmCard">
        <Stars count={10} />
      </div>
    </div>
  );
}

export default App;
