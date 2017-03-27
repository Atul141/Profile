import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline'


class Experience extends Component{

    render(){
        return(
        <div className="timeline">
                <Timeline className="timeline">
                        <TimelineEvent title="John Doe sent a SMS"
                                       createdAt="2016-09-12 10:06 PM"
                                       icon={<i className="material-icons md-18">textsms</i>}
                       className="timeline" >
                            </TimelineEvent>
                        <TimelineEvent className="timeline"
                            title="You sent an email to John Doe"
                            createdAt="2016-09-11 09:06 AM"
                            icon={<i className="material-icons md-18">email</i>}
                        >

                        </TimelineEvent>
                </Timeline>,
        </div>
        );
    }
}
export default Experience;