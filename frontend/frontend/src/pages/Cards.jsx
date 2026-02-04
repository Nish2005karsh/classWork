import React from "react";

const cardData = [
  {
    id: 1,
    src:"https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_user_personalization&w=740&q=80",
    title: "Frontend Development",
    description: "Build beautiful and responsive user interfaces using React."
  },
  {
    id: 2,
    src:"https://img.freepik.com/free-photo/programming-coding-software-development-technology-concept_53876-137138.jpg?semt=ais_user_personalization&w=740&q=80",
    title: "Backend Development",
    description: "Create powerful APIs and handle databases with Node.js."
  },
  {
    id: 3,
    src:"https://img.freepik.com/free-photo/full-stack-developer-working-with-laptop-computer_53876-138123.jpg?semt=ais_user_personalization&w=740&q=80",
    title: "Full Stack",
    description: "Combine frontend and backend to build complete products."
  }
];

const Cards = () => {
  return (
    <div style={styles.container}>
      {cardData.map((card) => (
        <div key={card.id} style={styles.card}>
            <img src={card.src} alt={card.title} style={{width: '100%', borderRadius: '8px'}} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px",
    flexWrap: "wrap"
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff"
  }
};

export default Cards;
