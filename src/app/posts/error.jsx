"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error }) {
    useEffect(() => {
        console.error("❌ 錯誤捕捉：", error);
    }, [error]);

    return (
        <div className="text-red-600">
            <h2 className="text-xl font-bold">🚨 發生錯誤！</h2>
            <p>{error.message}</p>
        </div>
    );
}
