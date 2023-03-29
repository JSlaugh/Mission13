import { useState } from 'react';
import data from '../Data/MovieData.json';

const MDS = data.MovieData;

function MovieList() {
  // Creation of Movie List
  const [listOfMovies] = useState(MDS);

  // Editing of the list to auto generate Keys
  const movieObjects = listOfMovies.map((movie, i) => ({
    MovieId: i,
    Title: movie.Title,
    Year: movie.Year,
    Director: movie.Director,
    Rating: movie.Rating,
    Category: movie.Category,
    Edited: movie.Edited,
  }));

  // const addMovies = () => {
  //   setListOfMovies([
  //     ...MDS,
  //     {
  //       MovieId: 6,
  //       Category: 'Action/Adventure',
  //       Title: 'Batman Returns',
  //       Year: 1992,
  //       Director: 'Tim Burton',
  //       Rating: 'PG-13',
  //     },
  //   ]);
  // };

  return (
    <div>
      <h2>Joel Hilton's Movie Collection</h2>
      <div>
        <table className="table table-bordered table-dark table-striped">
          <thead className="font-weight-bold">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* Placing of the list into the table */}
            {movieObjects.map((x) => (
              <tr key={x.MovieId}>
                <td>{x.Title}</td>
                <td>{x.Year}</td>
                <td>{x.Director}</td>
                <td>{x.Rating}</td>
                <td>{x.Category}</td>
                <td>{x.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
