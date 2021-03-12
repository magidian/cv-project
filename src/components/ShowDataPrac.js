import React from "react";
import Button from "./Button";

class ShowData extends React.Component {
  render() {
    return (
      <div className="pracData">
        <div>
          <div>
            <label className="wide">Company Name:</label>
            <label>{this.props.company}</label>
          </div>
          <div>
            <label className="wide">Title:</label>
            <label>{this.props.title}</label>
          </div>
          <div>
            <label className="wide">Tasks:</label>
            <label>{this.props.tasks}</label>
          </div>
          <div>
            <label className="wide">Year Exp:</label>
            <label>{this.props.exp}</label>
          </div>
        </div>

        <Button render={this.props.button} value="delete" className="button delBtn" onClick={() => { this.props.delData(this.props.index) }} />

      </div>
    );
  }
}

export default ShowData
