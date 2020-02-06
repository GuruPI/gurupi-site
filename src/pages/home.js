import React from "react"
import icon from "../images/gurupi-icon.png"

const Home = () => (
  <div>
    <h1 className="gurupi-home">
      <img src={ icon } className="icon-home"/>
      <a name="home">
        <span className="red">G</span >rupo de <span className="red">U</span>suários
        de <span className="red">Ru</span>by do <span className="red">Pi</span>auí
      </a>
      <hr />
    </h1>
  </div>
)

export default Home;
