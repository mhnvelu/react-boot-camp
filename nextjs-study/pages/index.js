import Link from "next/link";
const hello = () => {
  console.log("******** RUNNING INDEX PAGE ***********");
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <h1>Hello Index Page !!!</h1>
    </div>
  );
};

export default hello;
