// http://localhost:3000/posts/1

const Post = async (props) => {
    const params = await props.params;
    const post_id = params.post_id;
    return <div>Post {post_id}</div>;
};

export default Post;
