import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./ Card";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPosts()
      .then((data) => setPosts(data))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(posts);

  return (
    <ul className="post-list">
      {posts &&
        posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
    </ul>
  );
}

export default App;
