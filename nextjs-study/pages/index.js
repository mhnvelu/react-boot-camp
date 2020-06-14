import axios from "axios";
import Link from "next/link";
const hello = (props) => {
  console.log("******** RUNNING INDEX PAGE ***********");
  return (
    <div>
      <h1>Hello Index Page !!!</h1>
      <h2>Posts :</h2>
      {props.posts.map((post) => (
        <p key={post.id} id={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
            <a>{post.title} </a>
          </Link>
        </p>
      ))}
    </div>
  );
};

hello.getInitialProps = async (context) => {
  console.log("--------Executed getInitial Props----------");
  let url = "https://jsonplaceholder.typicode.com/posts";
  let response = await axios.get(url);
  // an object should be returned from this method.
  return { posts: response.data };
};

export default hello;
