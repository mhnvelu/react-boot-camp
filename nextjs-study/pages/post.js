import axios from "axios";
import { withRouter } from "next/router";
const Post = (props) => {
  console.log("******** RUNNING POST PAGE ***********");
  return (
    <>
      <h2>Comments for Post #{props.router.query.id}</h2>
      {props.post.map((p) => (
        <Comment key={p.id} {...p} />
      ))}
    </>
  );
};

const Comment = ({ email, body }) => {
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async (context) => {
  console.log(context.query);
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${context.query.id}`;
  let response = await axios.get(url);
  console.log(response.data);
  return { post: response.data };
};

export default withRouter(Post);
