import Image from 'next/image'

import { getMovies } from "../../api/handlers/movies";

const Movies = ({ movies }) => {
  return (
    <div>
      <Image src="/amaterasuuuuuu.png" width={100} height={100} alt="Test image" />
      Movies:
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>
            <span style={{ fontWeight: 700 }}>Title - {movie.title}; Origin - {movie.originCountry}</span>
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
