import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class DeleteButton extends Component {
    handleDeleteClick = () => {
        this.props.deleteSavedSurvey(this.props.surveyData._id)
    }

    render() {
        return (
            <Button variant="danger" onClick={this.handleDeleteClick} >Delete</Button>
        )
    }
}
