import React, { Component } from 'react';
import SurveyIframe from './SurveyIframe';


export default class Survey extends Component {
    render() {
        const id = window.location.pathname.slice(1);
        return (
            <div>
                 <br></br>
                
                <h1>Please complete the embedded survey below.</h1>

                <h2>Be sure to hit "SUBMIT" after answering the last question.</h2>
                <br></br>

              <SurveyIframe id={id} />
            </div>
        )
    }
}


