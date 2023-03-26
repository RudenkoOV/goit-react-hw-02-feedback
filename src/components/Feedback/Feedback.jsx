import React from "react";
import { Component } from "react";

class FeedbackForm extends Component {
    state = {}
    render () {
        return <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
        </div>
    }

}

export default FeedbackForm;