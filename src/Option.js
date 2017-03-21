import React, { Component } from 'react';
import Profile from "./profile.js";
import Buttons from "./Buttons.js";

class Option extends Component{

    render(){
        return(
            <div className="option">
                <Profile/>
                <Buttons/>
            </div>
);
}
}
export default Option;