import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamCard extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamUrl: eachItem.team_image_url,
    }))
    this.setState({isLoading: false, teamsList: formattedData})
  }

  render() {
    const {isLoading, teamsList} = this.state
    console.log(isLoading)

    return (
      <div className="main-div">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) : (
          teamsList.map(eachItem => (
            <Link to={`/team-matches/${eachItem.id}`} className="link-deco">
              <li className="div-deco col-6">
                <img
                  src={eachItem.teamUrl}
                  alt={eachItem.name}
                  className="team-url"
                />
                <p>{eachItem.name}</p>
              </li>
            </Link>
          ))
        )}
      </div>
    )
  }
}
export default TeamCard
