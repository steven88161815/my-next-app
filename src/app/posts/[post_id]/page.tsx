// http://localhost:3000/posts/1

const Post = ({ params }: { params: { post_id: string } }) => {
    const post_id = params.post_id;
    return <div>Post {post_id}</div>;
};

export default Post;
