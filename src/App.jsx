// import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./ Card";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  };

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["postsList"],
    queryFn: fetchPosts,
  });

  console.log(`isSuccess ${isSuccess}`);
  console.log(`isError ${isError}`);
  // console.log(result);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchPosts()
  //     .then((data) => setPosts(data))
  //     .then(() => setIsLoading(false));
  // }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{`Error: ${JSON.stringify(error)}`}</p>;
  }

  // console.log(posts);

  return (
    <ul className="post-list">
      {isSuccess &&
        posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
    </ul>
  );
}

export default App;
