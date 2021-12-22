import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummaryList';
import AllResultsButton from './AllResultsButton';
import NewSurveyButton from './NewSurveyButton';


export default class Admin extends Component {
    
    render() {
        return (
            <>
                <AdminHeader />
                <SurveySummaryList surveyData = {this.props.surveyData} />
                <AllResultsButton />
            </>
        )
    }
}
