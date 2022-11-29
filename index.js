const element = (
  <div>
    <img
      className="image"
      src="https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png"
    >
      <h1 className="heading">Cogratulations</h1>
      <div className="card-container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"></img>
        <h1 className="name">Kiran v</h1>
        <p>Ramachandra college of Engineering</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"></img>
      </div>
    </img>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
