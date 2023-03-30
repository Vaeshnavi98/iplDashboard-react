import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div>
      <h3>Latest Matches</h3>
      <div className="inner-div-deco">
        <div className="deco-1">
          <p>{latestMatchDetails.competing_team}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competing_team_logo}
          className="competing-logo-deco"
          alt={`latest match ${latestMatchDetails.competing_team}`}
        />
        <div>
          <h3>First Innings</h3>
          <p>{latestMatchDetails.first_innings}</p>
          <h3>Second Innings</h3>
          <p>{latestMatchDetails.second_innings}</p>
          <h3>Man of the match</h3>
          <p>{latestMatchDetails.man_of_the_match}</p>
          <h3>Umpires</h3>
          <p>{latestMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
