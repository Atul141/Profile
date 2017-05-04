import React, { Component } from 'react';

class Contact extends Component{

    render(){
        return(
        <div>
            <h3 className ="heading">Direct Contact Info</h3>
                <p><img src={require('../public/gmail.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">atulkumar140@gmail.com</span></p>
            <p><img src={require('../public/phone.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">+91 9481437780</span></p>
            <h3  className ="heading">View my contributions at</h3>
         <p><img src={require('../public/stack.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">stackoverflow.com/users/5855733/atul-kumar</span></p>
            <p><img src={require('../public/github.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">github.com/Atul141</span></p>
            <h3  className ="heading">Social Media</h3>
            <p><img src={require('../public/facebook.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">facebook.com/atulbkumar140</span></p>
            <p><img src={require('../public/linkedin.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">linkedin.com/in/atul-kumar-659750b7</span></p>
            <p><img src={require('../public/quora.jpg')} alt={"java"} className="contact-image"/> <span className="contact-info">quora.com/profile/Atul-Kumar-195</span></p>
            </div>
        );
    }
}
export default Contact;