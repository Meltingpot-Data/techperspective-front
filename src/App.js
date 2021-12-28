import React, { Component } from 'react';
import Header from './components/Header';
import Survey from './components/Survey';
import Admin from './components/Admin';
import Results from './components/Results';
import Landing from './components/Landing';
// import AboutUs from './components/AboutUs';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSurvey: null,
      surveyData: [],
      surveyId: null,
      error: false,
      surveyToGraph: []
    }
  }
  graphResults = (obj) =>{
    this.setState({surveyToGraph: obj})
  }
  /* Grab survey data from server, which grabs from db */
  getSavedSurvey = async () => {
    if (this.props.auth0.isAuthenticated) {
      const tokenResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = tokenResponse.__raw;
      console.log("jwt is... ", jwt);

      const axiosRequestConfig = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/survey',
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      console.log(axiosRequestConfig);
      // let url = `${process.env.REACT_APP_SERVER_URL}/survey`
      // console.log("getSavedSurvey url is: " + url);

      try {
        let result = await axios(axiosRequestConfig);
        // console.log("The surveydata.data is before setting state is: " + this.state.surveyData)
        this.setState({ surveyData: result.data });
        this.setState({ error: false })
        // console.log("The surveydata.data is: " + JSON.stringify(this.state.surveyData));
      } catch (error) {
        console.error("Data receive error: " + error);
        this.setState({ error: true });
      }
    }
  }

  /* Ping server to delete survey data from DB */
  deleteSavedSurvey = async (id) => {
    // console.log('clicked delete button', id);
    let url = `${process.env.REACT_APP_SERVER_URL}/survey/${id}`
  // console.log("deleteSavedSurvey url is: " + url);
    try {
      await axios.delete(url);
      const updatedSurveys = this.state.surveyData.filter((survey)=> survey._id !== id);
      this.setState({ surveyData: updatedSurveys});

    } catch (error ) {
      console.error("Delete error: " + error);
      this.setState({ error: true });
    }
  }

  /* Ping server to create a new survey ID to enter into the survey Iframe*/
  createNewSurvey = async () => {
    console.log('new survey button works');
    let url = `${process.env.REACT_APP_SERVER_URL}/jotform`
    try {
      const newSurveyObj = await axios.post(url);
      this.setState({ activeSurvey: newSurveyObj.data });

    } catch (error) {
      console.log(error, 'could not create new survey');
    }
  }

  getActiveSurvey = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/active`
    try {
      const activeSurvey = await axios.get(url);
      this.setState({ activeSurvey: activeSurvey.data });
    } catch (error) {
      console.log(error, 'No Active Survey');
    }
  }

  putActiveSurvey = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/survey`

    console.log(this.state.activeSurvey);
    this.state.activeSurvey.active = false;
    console.log(this.state.activeSurvey);

    try {
      await axios.post(url, this.state.activeSurvey);
    } catch (error) {
      console.log(error, 'could not post survey');
    }
  }

  /* Ping Jotform to clone a survey for the next class */


//Adds Auth0 Integration
  getConfig = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(res);
      console.log(jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}`},
      }
      console.log(config);
      return config;
    }
  }

  // componentDidMount() {
  //   this.getSavedSurvey();
  //   this.getActiveSurvey();
  // }


  render() {
    return (
      <>
        <Router>
          <Header />
          {/* <Results surveyData={this.state.surveyData} getSavedSurvey= {this.getSavedSurvey} /> */}
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/admin" element={<Admin graphResults={this.graphResults} activeSurvey={this.state.activeSurvey} createNewSurvey={this.createNewSurvey} surveyData={this.state.surveyData} putActiveSurvey={this.putActiveSurvey} deleteSavedSurvey={this.deleteSavedSurvey} getActiveSurvey={this.getActiveSurvey} getSavedSurvey={this.getSavedSurvey} />} />
            <Route path="/results" element={<Results surveyToGraph= {this.state.surveyToGraph} getSavedSurvey={this.getSavedSurvey} surveyData={this.state.surveyData} />} />
            <Route path="/survey" element={<Survey activeSurvey={this.state.activeSurvey} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
// export default App;

