import { useState } from 'react';
import data from '../Data/MovieDataSample.json';

const MDS = data.MovieDataSample;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MDS);

  const addMovies = () => {
    setListOfMovies([
      ...MDS,
      {
        MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <div>
      <h2>Joel Hilton's Movie Collection</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((x) => (
              <tr key={x.MovieId}>
                <td>{x.Title}</td>
                <td>{x.Year}</td>
                <td>{x.Director}</td>
                <td>{x.Rating}</td>
                <td>{x.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovies}>
        Add Movie
      </button>
    </div>
  );
}

export default MovieList;
