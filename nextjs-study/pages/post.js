import axios from "axios";
import { withRouter } from "next/router";
const Post = (props) => {
  console.log("******** RUNNING POST PAGE ***********");
  return (
    <h2>Post id : {props.router.query.id}</h2>

    // <>
    //   {props.post.map((p) => (
    //     <p key={p.id}>{p.body}</p>
    //   ))}
    // </>
  );
};

// Post.getInitialProps = async (context) => {
//   let url = `https://jsonplaceholder.typicode.com/comments?postId=${context.query.id}`;
//   let response = await axios.get(url);
//   return { post: response.data };
// };

export default withRouter(Post);
