import "./App.css";
import Row from "./Row";
import Movieslist from "./Movieslist";
import Cover from "./Cover";

function App() {
  return (
    <div className="App">
      <Cover fetchdata={Movieslist.trending} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchdata={Movieslist.netflixOriginals}
        itsbig={true}
      />
      <Row fetchdata={Movieslist.topRated} title="Top Rated" />
      <Row fetchdata={Movieslist.actionMovies} title="Action Movies" />
      <Row fetchdata={Movieslist.comedyMovies} title="Comedy Movies" />
      <Row fetchdata={Movieslist.horrorMovies} title="Horror Movies" />
      <Row fetchdata={Movieslist.romanceMovies} title="Romance Movies" />
      <Row fetchdata={Movieslist.documentary} title="Documentary" />
    </div>
  );
}

export default App;
