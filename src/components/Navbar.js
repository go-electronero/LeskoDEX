import React, {Component} from 'react'
import { connect } from 'react-redux'
import { accountSelector } from '../store/selectors'
import logo from '../images/logo.png' 



class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#/"><img src={logo} width="127" height="32" alt=""></img>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                 className="nav-link small" 
                 href={`https://mainnet-explorer.kekchain.com/address/${this.props.account}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                 {this.props.account}
                 </a>
              </li>
            </ul>
           </nav>
          )
  }
}

function mapStateToProps(state){
  return{
    account: accountSelector(state)
  }
}
export default connect(mapStateToProps)(Navbar);

