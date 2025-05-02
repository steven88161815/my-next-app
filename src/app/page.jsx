"use client";

import Link from "next/link";
import { useEffect } from "react";

const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjJkNWE3OTEyZGI5NmZmN2UwNmY4NGNhNjFiYjBjZSIsIm5iZiI6MS43NDYwNzYxNjQyOTEwMDAxZSs5LCJzdWIiOiI2ODEzMDIwNDY5YWU0NzIwYmI1ZTZmZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9k-0uFbx40g06-6LBqf3DnaBt9kq62Q9H0YuqL25AP8",
    },
};

export default function Home() {
    useEffect(() => {
        const getMovieData = async () => {
            // const response = await fetch(url, options);
            const response = await fetch("http://localhost:3000/api/movie");
            const data = await response.json();
            console.log(data);
        };

        getMovieData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col item-center justify-between p-24">
            <Link href="/posts">Go Posts</Link>
        </main>
    );
}
