
"use client"
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
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <ul className="mt-4 space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
           
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}  
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
