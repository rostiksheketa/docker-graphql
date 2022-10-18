export const getMovies = async () => {
  try {
      const resp = await fetch("http://localhost:3000/api/movies");

      return resp.json();
  } catch (error) {
      return error;
  }
}
