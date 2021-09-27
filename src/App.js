import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer' ;
import Event2 from './events/Event2';
import AboutUs from './events/AboutUs';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { setShow: false, tokenz: 0}
  }
  render() {
    return (
      <>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <Header picture={this.props.auth0.user.picture} name={this.props.auth0.user.name} myEmail={this.props.auth0.user.email} tokenz={this.state.tokenz} />
            </>
            : <Header />
        }
        <Main />
             <div>
        {/* <Event2 /> */}
        <AboutUs/>
      </div>
        <Footer />
      </>
   

    )
  }
}
export default withAuth0(App);
