import React, { useEffect, useState } from "react";
const FetchingApi = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={styles.card}>
      <h2>Todo Item</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    margin: "40px auto",
    textAlign: "center"
  }
};

export default FetchingApi;
