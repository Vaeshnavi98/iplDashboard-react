import TeamCard from '../TeamCard'

import './index.css'

const Home = () => (
  <div className="main-div">
    <div className="dashboard-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="logo-deco"
      />
      <h1>IPL Dashboard</h1>
    </div>
    <TeamCard />
  </div>
)

export default Home
