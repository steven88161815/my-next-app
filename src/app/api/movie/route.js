import { NextResponse } from "next/server";

// http://localhost:3000/api/movie

const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
};

// 取得資料（Read）
export const GET = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};
