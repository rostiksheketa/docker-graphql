import { getMovies } from "../../api/handlers/movies";

const Movies = ({ movies }) => {
  return (
    <div>
      Movies:
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>
            <span>Title - {movie.title}; Origin - {movie.originCountry}</span>
          </div>
        ))}
      </ul>
    </div>
  )
};

export async function getServerSideProps() {
  const movies = await getMovies();

  return {
      props: {
        movies
      }
  }
}

export default Movies;
