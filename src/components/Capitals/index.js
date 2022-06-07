import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onChangecapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state
    const activeCapitalandCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )
    return activeCapitalandCountry.country
  }

  render() {
    const {activeCapital} = this.state
    const Country = this.getCountry(activeCapital)
    return (
      <div className="bg_container">
        <div className="min_container">
          <h1>Countries And Capitals</h1>
          <div className="countries_capital_container">
            <select onChange={this.onChangecapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country ?</p>
          </div>
          <p>{Country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
