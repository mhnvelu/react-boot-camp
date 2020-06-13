import axios from "axios";
const Post = (props) => {
  console.log("******** RUNNING POST PAGE ***********");
  return (
    <>
      {props.post.map((p) => (
        <p key={p.id}>{p.body}</p>
      ))}
    </>
  );
};

Post.getInitialProps = async (context) => {
  console.log(context.query);
  console.log(context.pathname);
  console.log(context.aspath);
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${context.query.id}`;
  let response = await axios.get(url);
  console.log(response.data);
  return { post: response.data };
};

export default Post;
