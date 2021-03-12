import React from "react";
import EditText from "./EditText"

class GeneralInfo extends React.Component {
    render() {
        return (
            <div className="GeneralInfo">
                <EditText value="First Name" buttons={this.props.buttons} />
                <EditText value="Last Name" buttons={this.props.buttons} />
                <EditText value="Email" buttons={this.props.buttons} />
                <EditText value="Phone Number" buttons={this.props.buttons} />
            </div>
        )
    }
}

export default GeneralInfo
