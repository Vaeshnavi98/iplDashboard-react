import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      bannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {teamData} = this.state
    const {bannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-deco">
        <img src={bannerUrl} className="banner-deco" alt="team banner" />
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          id={latestMatchDetails.id}
        />
        <MatchCard recentMatches={recentMatches} />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
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
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
