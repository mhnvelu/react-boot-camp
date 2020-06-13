import Navbar from "../components/Navbar";

const hello = () => {
  console.log("******** RUNNING INDEX PAGE ***********");
  return (
    <div>
      <Navbar />
      <h1>Hello Index Page !!!</h1>
    </div>
  );
};

export default hello;
