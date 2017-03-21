import React, { Component } from 'react';

class Buttons extends Component{
    render(){
        return(
        <div className="button">
            <button className="button"><p className="button-text">OverView</p></button>
            <button className="button"><p className="button-text">Skill Set</p></button>
            <button className="button"><p className="button-text">Experience</p></button>
            <button className="button"><p className="button-text">Contact</p></button>
        </div>
        );
    }

}
export default Buttons;