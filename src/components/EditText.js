import React from "react";
import Button from "./Button";

class EditText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        value: this.props.value, //why is this needed?
        edit: 0,

    }

    this.setEdit = this.setEdit.bind(this);    //what does setEdit do?
    }

    comp = () => { //when you click edit button
        if (this.state.edit === 1) {
            return <div className="Text">
                <input type="text" value={this.state.value} onChange={this.updateValue} ></input> 
                <input type="button" value="Save" onClick={this.setEdit} className="button" ></input>
            </div>
        }

        return <div className="Text">
            <div>
                <label>{this.state.value}</label>
            </div>
            <Button value="Edit" render={this.props.button} className="button" onClick={this.setEdit} />
        </div>
    }

    updateValue = (e) => {
        this.setState({ value: e.target.value }) //e.target.value means? why updateValue no need to bind like setEdit?
    }


    setEdit = () => {
        console.log("setEdit");
        this.setState(()=> {
            if (this.state.edit === 0) { //setEdit toggles between the two different state
                return { edit: 1 }
            }
            return { edit: 0}
        });
    }
    render() {
        return this.comp(); //why need this when you call this function?
    }
}

export default EditText;