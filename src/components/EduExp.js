import React from "react";
import ShowData from "./ShowDataSchool";
import Button from "./Button";

class EduExp extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.EduExp; //i think this.props.EduExp is from the parent component (App.js)
        this.delEdu = this.delEdu.bind(this); //what is it binding?
        this.setEdit = this.setEdit.bind(this);
    }

    delEdu = (index) => {  //0,1,2,3,4,...
        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e); //prevState is a parameter, but what is data.map(e => e)?
            prevData.splice(index, 1); //at index position, remove 1 element. this means?
            return {
                data: prevData //this is the content of the new array
            }
        })

        this.props.getEdu(this.state); //what is getEdu?
    }

    updateSchool = (e) => {
        this.setState({ school: e.target.value }); //e.target.value is whatever value user inputs
    }
    updateFrom = (e) => {
        this.setState({ from: e.target.value });
    }
    updateTo = (e) => {
        this.setState({ to: e.target.value });
    }
    updateQual = (e) => {
        this.setState({ qualification: e.target.value });
    }

    addQuali = () => {
        return <div className='addQuali'>
            <div>
                <label>School:</label><input type="text" onChange={this.updateSchool} value={this.state.school}></input>
            </div>
            <div>
                <label>From:</label><input type="text" onChange={this.updateFrom} value={this.state.from}></input>
            </div>
            <div>
                <label>To:</label><input type="text" onChange={this.updateTo} value={this.state.to}></input>
            </div>
            <div>
                <label>Qualification:</label><input type="text" onChange={this.updateQual} value={this.state.qualification}></input>
            </div>
            <input type="button" value="submit" onClick={this.submitQuali} className={"button"}></input>
        </div>
    }

    //i think value={this.state.---} is the state after the user inputs

    submitQuali = () => {
        let data = {
            school: this.state.school, //state after submission, which is after the user inputs value
            from: this.state.from,
            to: this.state.to,
            qualification: this.state.qualification
        };

        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e); //again?
            prevData.push(data); //push data here means the data user inputs get added on top of the any previous submission, meaning there can be multiple submissions
            return {
                data: prevData,
                edit: 0 //why is edit here? isn't the edit button only for the general info part?
            };
        });

        this.props.getEdu(this.state);
    }

    showEdu = () => {
        let subButton = <Button render={this.props.button} value="Add" onClick={this.setEdit} className="button" />; //this is add button? then what is render={this.props.button}?
        if (this.state.data.length === 0) { //means no data?
            return subButton;
        } else {
            console.log(this.state.data);
            let data = [];
            let ts = this.state;
            for (let i =0; i<this.state.data.length; i++) { //what is key here?
                data.push(<ShowData key={i} index={i} button={this.props.button} school={ts.data[i].school} from={ts.data[i].to} qual={ts.data[i].qualification} delData={this.delEdu} />)
            } //what is all this for?
            return <div className="showEdu">
                {data}
                {subButton}
            </div>
        }
    }

    setEdit = () => {
        this.setState({ edit: 1 })
    }

    handleRender = () => {
        if (this.state.edit === 0) { //before add button is pressed
            return this.showEdu();
        }
        if (this.state.edit === 1) { //after add button is pressed
            return this.addQuali();
        }
    }

    render() {
        console.log("edu exp:", this.props.button); //?? what is this.props.button referring to ??
        return (
            <div className="EduExp">
                <h3 className="heading">Educational Experience</h3>
                {this.handleRender()}
            </div>
        )
    }
}

export default EduExp;