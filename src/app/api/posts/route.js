import { NextResponse } from "next/server";

// http://localhost:3000/api/posts

const url = "https://jsonplaceholder.typicode.com/posts";

// 拿所有文章資料
export const GET = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};

// 根據使用者傳來的資料建立文章
export const POST = async (req) => {
    const { userId, title, body } = await req.json();
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ userId, title, body }),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};
