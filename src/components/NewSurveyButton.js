import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class NewSurveyButton extends Component {
    render() {
        return (
            <Button style={{ height: '3rem', width: '11rem', margin:15 }} variant="dark" onClick={this.props.openNewSurveyModal} >New Survey</Button>
        )
    }
}

export default NewSurveyButton;