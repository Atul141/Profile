import React, { Component } from 'react';

class Contact extends Component{

    render(){
        return(
        <div>
        <div>
            <h3>Direct Contact Info</h3>
            <div >
                <p className="contact-text"><img src={require('../public/gmail.jpg')} alt={"java"} className="contact-image"/>     : atulkumar140@gmail.com</p>
             </div>
            <p>+91 9481437780</p>
         </div>
            <h3>View my contributions at</h3>
           <i class="fa fa-stack-overflow" aria-hidden="true">stackoverflow.com/users/5855733/atul-kumar</i>
            <p>github.com/Atul141</p>
            <h3>Social Media</h3>
            <p>facebook.com/atulbkumar140</p>
            <p>linkedin.com/in/atul-kumar-659750b7</p>
            <p>quora.com/profile/Atul-Kumar-195</p>
            </div>
        );
    }
}
export default Contact;