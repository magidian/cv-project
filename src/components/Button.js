import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.render === '1') { //why render props?
            return <input type="button" value={this.props.value} className={this.props.className} onClick={this.props.onClick}></input> 
        } else {
            return <div></div>
        }
    }
}

//what is the purpose of this Button component???

export default Button;