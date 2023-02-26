import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      Main page is here
      Check our{" "}
      <Link href="movies">
          movies
      </Link>
    </div>
  )
};

export default MainPage;
