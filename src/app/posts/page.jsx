// http://localhost:3000/posts

export const metadata = {
    title: "Posts",
    description: "Hello World",
};

const Posts = async () => {
    // 模擬隨機錯誤
    const shouldFail = Math.random() > 0.7;
    if (shouldFail) {
        throw new Error("🔥 模擬 API 錯誤！");
    }

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store", // 叫 Next.js 每次都強制重新請求（不要用快取）
    });

    if (!res.ok) {
        throw new Error("API 錯誤：" + res.status);
    }

    const posts = await res.json();

    return (
        <div className="text-green-600">
            <h1 className="text-2xl font-bold mb-2">📚 Post 列表</h1>
            <ul className="list-disc pl-6">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
