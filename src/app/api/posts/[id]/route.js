import { NextResponse } from "next/server";

// http://localhost:3000/api/posts/1

const url = "https://jsonplaceholder.typicode.com/posts";

// 取得資料（Read）
export const GET = async (_, props) => {
    const params = await props.params;
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};

// 整筆更新資料（Replace）
export const PUT = async (_, props) => {
    const params = await props.params;
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                id: 1,
                title: "hello",
                body: "world",
                userId: 1,
            }),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};

// 局部更新資料（Update）
export const PATCH = async (_, props) => {
    const params = await props.params;
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: "hello",
            }),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};

// 刪除資料（Delete）
export const DELETE = async (_, props) => {
    const params = await props.params;
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};
