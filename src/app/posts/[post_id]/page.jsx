// http://localhost:3000/posts/1
// npx @next/codemod@canary next-async-request-api . --force flag

export const generateMetadata = async (props) => {
    const params = await props.params;
    const post_id = params.post_id;
    return {
        title: `Post ${post_id}`,
        description: "Post Test",
    };
};

const Post = async (props) => {
    const params = await props.params;
    const post_id = params.post_id;
    return <div>Post {post_id}</div>;
};

export default Post;
