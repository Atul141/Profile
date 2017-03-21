import React, { Component } from 'react';

class Buttons extends Component{

    __changeCurrentContentOverView(event){
      this.props.changeCurrentContent('overview');
     }

     __changeCurrentContentExperience(event){
      this.props.changeCurrentContent('experience');
     }

      __changeCurrentContentSkillSet(event){
      this.props.changeCurrentContent('skillset');
     }

     __changeCurrentContentContact(event){
      this.props.changeCurrentContent('contact');
     }

    render(){
        return(
        <div className="buttons">
            <button className="button" onClick={this. __changeCurrentContentOverView.bind(this)} ><p className="button-text">OverView</p></button>
            <button className="button" onClick={this.__changeCurrentContentSkillSet.bind(this)}><p className="button-text">Skill Set</p></button>
            <button className="button" onClick={this.__changeCurrentContentExperience.bind(this)}><p className="button-text">Experience</p></button>
            <button className="button" onClick={this.__changeCurrentContentContact.bind(this)}><p className="button-text">Contact</p></button>
        </div>
        );
    }

}
export default Buttons;