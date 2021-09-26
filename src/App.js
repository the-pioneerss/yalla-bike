import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer' ;
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { setShow: false, tokenz: 0 , colorThems:'dark' , fontColor:'dark' , idColor:'white'}
  }
  handleGreen = () => { this.setState({ colorThems : 'success' , idColor:'GREEN'}) }
  handleYellow = () => { this.setState({ colorThems : 'warning' , idColor:'YELLOW' }) }
  handleBlue = () => { this.setState({ colorThems : 'info' , idColor:'BLUE' }) }
  handleDark = () => { this.setState({ colorThems : 'dark' , idColor:'DARK'}) }
  handleLight = () => { this.setState({ colorThems : 'light' , fontColor:'light' , idColor:'LIGHT' }) }
  handleRed = () => { this.setState({ colorThems : 'danger' , idColor:'RED'}) }
  render() {
    return (
      <>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <Header idColor={this.state.idColor} handleGreen={this.handleGreen} handleYellow={this.handleYellow}
            handleBlue={this.handleBlue} handleDark={this.handleDark}
            colorThems={this.state.colorThems} fontColor={this.state.fontColor} handleLight={this.handleLight} handleRed={this.handleRed} picture={this.props.auth0.user.picture} name={this.props.auth0.user.name} myEmail={this.props.auth0.user.email} tokenz={this.state.tokenz} />
            </>
            : <Header id={this.state.idColor} handleGreen={this.handleGreen} handleYellow={this.handleYellow}
            handleBlue={this.handleBlue} handleDark={this.handleDark}
            handleLight={this.handleLight} handleRed={this.handleRed}
            colorThems={this.state.colorThems} fontColor={this.state.fontColor}/>
        }
        <Main />
        <Footer colorThems={this.state.colorThems}
        fontColor={this.state.fontColor} />
      </>
    )
  }
}
export default withAuth0(App);