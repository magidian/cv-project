import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo"
import EduExp from "./components/EduExp"
import PraExp from "./components/PraExp"

class App extends Component {
  constructor() {
    super();

    //this is the state of the system initially
    this.state = {
      EduExp: {
        school: "",
        from: 0,
        to: 0,
        qualification: "",
        edit: 0, //edit button not pressed yet
        data: [], //?
      },
      PraExp: {
        company: "",
        title: "",
        tasks: "",
        exp: "",
        edit: 0,
        data: [],
      },
      buttons: "1", //means have buttons when it is set to updateCV state
      btnVal: "preview",
    };

    this.getEdu = this.getEdu.bind(this);
    this.getPra = this.getPra.bind(this);
  }

  getEdu = (e) => {
    this.setState({ EduExp: e }); //does it mean e (click) changes the state? what is e in this context?
  };

  getPra = (e) => {
    this.setState({ PraExp: e });
  };

  view = () => {
    if (this.state.buttons === "0") {
      this.setState({
        buttons: "1",
        btnVal: "preview",
      });
    } else {
      this.setState({
        buttons: "0",
        btnVal: "update CV",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>CV generator</h1>
        <input
          className="button"
          type="button"
          value={this.state.btnVal} //"Preview"
          onClick={this.view} //Toggle view
        ></input>
        <GeneralInfo buttons={this.state.buttons} />
        <div className="line"></div>
        <EduExp
          getEdu={this.getEdu}
          EduExp={this.state.EduExp}
          button={this.state.buttons}
        />
        <div className="line"></div>
        <PraExp
          getPra={this.getPra}
          PraExp={this.state.PraExp}
          button={this.state.buttons}
        />
        {/* why buttons in generalInfo but button in eduExp and praExp?? */}
      </div>
    );
  }
}

export default App;