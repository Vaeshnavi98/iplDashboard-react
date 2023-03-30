// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  return (
    <div className="match-card-div">
      {recentMatches.map(eachItem => (
        <div className="match-card-deco">
          <img
            src={eachItem.competing_team_logo}
            className="inner-logo"
            alt={`competing team ${eachItem.competing_team}`}
          />
          <p>{eachItem.competing_team}</p>
          <p>{eachItem.result}</p>
          <p>{eachItem.match_status}</p>
        </div>
      ))}
    </div>
  )
}

export default MatchCard
