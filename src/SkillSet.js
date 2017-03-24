import React, { Component } from 'react';
import StarRatingComponent from "react-star-rating-component";

class SkillSet extends Component{

    render(){
        return(
        <div >
            <img src={require('../public/java.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />

            <img src={require('../public/Spring.png')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
            <img src={require('../public/js.png')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
             <img src={require('../public/React.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
             <img src={require('../public/html.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
            <img src={require('../public/css.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
            <img src={require('../public/heroku.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
            <img src={require('../public/postgresSql.jpg')} alt={"java"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                        size={40}
                                        editing={false}
                                        emptyStarColor={"rgb(195,195,195)"}
                                        value={3.5}
                                    />
        </div>
        );
    }
}
export default SkillSet;