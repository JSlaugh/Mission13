import { useEffect, useState } from 'react';

import { Movie } from '../Models/movie';
// Movie Function
function MovieList() {
  // Create Variables
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);
  // Pull from database
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      let temp = await rsp.json();

      // Filter by if the movie has been edited or not
      temp = temp.filter((x: any) => x.edited === 'Yes');
      // Sort the movie by title Alphabetically
      temp = temp.sort((a: any, b: any) => a.title > b.title);
      setListOfMovies(temp);
    };
    // Call the request
    fetchMovie();
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
              <tr key={x.movieId}>
                <td>{x.category}</td>
                <td>{x.title}</td>
                <td>{x.year}</td>
                <td>{x.director}</td>
                <td>{x.rating}</td>
                <td>{x.edited}</td>
                <td>{x.lentTo}</td>
                <td>{x.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
