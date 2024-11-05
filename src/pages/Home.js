import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <div className="carousel">
        {[1, 2, 3, 4].map((img) => (
          <div className="card" key={img}>
            <img src={`https://via.placeholder.com/150?text=Image+${img}`} alt={`Image ${img}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
