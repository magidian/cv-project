import React from "react";
import Button from "./Button";

class ShowData extends React.Component {
    render() {
        console.log(this.props.button); //what is this for?
        return <div className="schoolData">
            <div>
                <div>
                    <label className="wide">Institution:</label><label>{this.props.school}</label>
                </div>
                <div>
                    <label className="wide">From:</label><label>{this.props.from}</label>
                </div>
                <div>
                    <label className="wide">To:</label><label>{this.props.to}</label>
                </div>
                <div>
                    <label className="wide">Qualification:</label><label>{this.props.qualification}</label>
                </div>
            </div>
            <Button render={this.props.button} value="delete" className="button delBtn" onClick={() => { this.props.delData(this.props.index) }} />
        </div>
    }
}


//what is render={this.props.button}? maybe it creates the button? what is delData and index in the last line?


export default ShowData; //the DOM elements created by this component are shown after you SUBMIT