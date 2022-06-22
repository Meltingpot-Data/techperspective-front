import { Component } from "react";
import ActiveSurvey from "./ActiveSurvey"

class ActiveSurveyContainer extends Component {
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <>
                <br></br>

                <div style={{ justifyContent: "center" }} >

                    {this.props.activeSurvey && this.props.activeSurvey.map((survey, idx) => {
                        return (

                            <ActiveSurvey graphResults={this.props.graphResults} openModal={this.props.openModal} key={idx} activeSurvey={survey} />

                        )
                    })}

                </div>
                <br></br>
            </>
        )
    }
}

export default ActiveSurveyContainer;