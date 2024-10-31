import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    setShowGreeting(true);
  };

  return (
    <div className="app">
      {!showGreeting ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleClick}>Celebrate!</button>
        </div>
      ) : (
        <div
          className="greeting-container"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="glass-effect">
            <h1 className="animated-greeting">Happy Diwali, {name}! 🎉✨🥳</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
