var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Welcome to Git Clash, where you can battle your friends! </h1>
        <img src='https://www.shareicon.net/data/2016/03/08/730791_hands_512x512.png' />
        <Link className='button' to='/battle'>Battle</Link>
      </div>
    )
  }
}

module.exports = Home;