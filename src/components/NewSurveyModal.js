import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewSurveyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  surveyName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleConfirm = (e) => {
    e.preventDefault();
    this.props.closeNewSurveyModal();
    this.props.createNewSurvey(this.state.name);

  }
  render() {
    return (
      <>
        <Modal show={this.props.showNewSurveyModal} onHide={this.props.closeNewSurveyModal}>
        <Form onSubmit={this.handleConfirm}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Survey</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group>
                <Form.Label>New Survey</Form.Label>
                <Form.Control type="text" placeholder="Enter survey name" required onChange={this.surveyName}/>
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.closeNewSurveyModal}>
              Cancel
            </Button>
            <Button type="submit" variant="success">
              Submit
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
  }
}

export default NewSurveyModal;