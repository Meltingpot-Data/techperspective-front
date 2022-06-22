import { Component } from 'react';
import { Card, Button, Row, Overlay, Tooltip } from 'react-bootstrap';
import ResultsButton from './ResultsButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ActiveSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            target: null
        }
    }

    setShow = (event) => {
        this.setState({
            show: !this.state.show,
            target: event.target
        })

    }
    render() {
        return (
            <Card style={{ margin: 'auto', marginTop: 12, maxWidth: '70%' }}>
                <Card.Header as="h5">{this.props.activeSurvey.surveyName}</Card.Header>

                <Card.Body>
                    <Row md={6} style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                        {/* Copies individual survey link */}

                        <CopyToClipboard text={`${process.env.REACT_APP_AUTH_REDIRECT_URI}/${this.props.activeSurvey.surveyID}`}>
                            <Button style={{ maxHeight: 36 }} variant="primary" onClick={this.setShow}>Share</Button>
                        </CopyToClipboard>
                        {/* confirms copy w/ tooltip */}
                        <Overlay target={this.state.target} show={this.state.show} placement="right">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Copied!
                                </Tooltip>
                            )}
                        </Overlay>

                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>

                        <ResultsButton surveyID={this.props.activeSurvey.surveyID} graphResults={this.props.graphResults} />

                        <Button style={{ maxHeight: 36, paddingLeft: 0, paddingRight: 0 }} variant="outline-dark" onClick={() => { this.props.openModal(this.props.activeSurvey) }}>Archive</Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;