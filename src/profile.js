import React, { Component } from 'react';

class Profile extends Component{

    render(){
        return(
        <div className="profile" >
        <p>profile</p>
        <img src="C_Atul.jpg" alt="error" className="profile-image"/>
        <p>Developer at ThoughtWorks</p>
        <p>8 months of experience</p>
        <p>B E in Computer Science Engineering</p>
        <p>Bangalore</p>
        </div>
        );
}


}
export default Profile;