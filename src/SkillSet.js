import React, { Component } from 'react';
import StarRating from 'react-star-rating'

class SkillSet extends Component{

    render(){
        return(
        <div>
            <p>SkillSet</p>
            <img src={require('../public/java.jpg')} alt={"java"} className="profile-image"/>
            <StarRating name={"Skill Level"} rating={3.5} size={25}/>
        </div>
        );
    }
}
export default SkillSet;