import { useEffect, useState } from 'react';

import { Movie } from '../Models/movie';

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOfMovies(temp);
    };

    fetchFood();
  }, []);
  return (
    <div>
      <h2>Joel Hilton's Movie Collection</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((x) => (
              <tr key={x.MovieId}>
                <td>{x.Category}</td>
                <td>{x.Title}</td>
                <td>{x.Year.toDateString()}</td>
                <td>{x.Director}</td>
                <td>{x.Rating}</td>
                <td>{x.Edited}</td>
                <td>{x.LentTo}</td>
                <td>{x.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
