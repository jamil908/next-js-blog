export default async function BlogDetails({ params }) {
    const { id } = params; 
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
    if (!res.ok) {
      return (
        <main className="p-6">
          <h1 className="text-red-500 text-2xl">Blog post not found!</h1>
        </main>
      );
    }
  
    const post = await res.json();
  
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4 text-gray-700">{post.body}</p>
      </main>
    );
  }
  