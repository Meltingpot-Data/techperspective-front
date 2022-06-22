import React, { Component } from 'react';
import SurveySummaryList from './SurveySummaryList';
import ActiveSurveyContainer from './ActiveSurveyContainer';
import ConfirmModal from './ConfirmModal';
import { withAuth0 } from '@auth0/auth0-react';
import NewSurveyButton from './NewSurveyButton';
import NewSurveyModal from './NewSurveyModal';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedSurvey: null,
            showNewSurveyModal: false

        }
    }

    // for ConfirmModal.js
    closeModal = () => {
        this.setState({ showModal: false })
    }

    openModal = (selectedSurvey) => {
        this.setState({ 
            showModal: true,
            selectedSurvey: selectedSurvey 
        })  
    }

    // for NewSurveyModal.js
    closeNewSurveyModal = () => {
        this.setState({ showNewSurveyModal: false })
    }

    openNewSurveyModal = () => {
        this.setState({ 
            showNewSurveyModal: true,
           
        })
    }
    
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <div>
            <ConfirmModal showModal={this.state.showModal} closeModal={this.closeModal} putActiveSurvey={this.props.putActiveSurvey} selectedSurvey={this.state.selectedSurvey} />

            <NewSurveyModal showNewSurveyModal={this.state.showNewSurveyModal} closeNewSurveyModal={this.closeNewSurveyModal} createNewSurvey={this.props.createNewSurvey} />
            
                {this.props.auth0.isAuthenticated &&
                    <>
                        <NewSurveyButton openNewSurveyModal={this.openNewSurveyModal} />
                        {/* Future task: add update API Button*/}

                        <h2>Active Surveys</h2>
                        {this.props.activeSurvey && <ActiveSurveyContainer activeSurvey={this.props.activeSurvey} graphResults={this.props.graphResults} openModal={this.openModal} getActiveSurvey={this.props.getActiveSurvey} />}
                    
                        <h2>Archived Surveys</h2>
                        <SurveySummaryList getSavedSurvey={this.props.getSavedSurvey} graphResults={this.props.graphResults} surveyData={this.props.surveyData} deleteSavedSurvey={this.props.deleteSavedSurvey} />
                    </>
                  }
            </div>
        )
    }
}

export default withAuth0(Admin);