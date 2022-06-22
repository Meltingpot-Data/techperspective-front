import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe"; 

// Iframe docs here: https://www.npmjs.com/package/react-iframe

export default class SurveyIframe extends Component {
 
  render() {
    return (
      <div>
        
      <Card>
        <Iframe
            url={`https://www.jotform.com/form/${this.props.id}`}
            width="100%"
            height="500px"
            id="survey"
          />
        </Card>
      </div>
    );
  }
}