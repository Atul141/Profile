import React, { Component } from 'react';
import OverView from "./OverView";
import SkillSet from "./SkillSet";
import Experience from "./Experience";
import Contact from "./Contact";

class Content extends Component{

    render(){
        return(
            <div className="content">
            {
            this.props.currentContent==='overview'&&<OverView />

           }{ this.props.currentContent==='skillset'&&<SkillSet />
}
 {           this.props.currentContent==='experience'&&<Experience />
}
 {           this.props.currentContent==='contact'&&<Contact />

            }
            </div>
        );
    }

}
export default Content;