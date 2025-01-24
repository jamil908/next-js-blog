"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Blog Posts
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.id}`}>
              <div className="cursor-pointer">
                <h2 className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {post.body}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
