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
                                  <br></br>

            <img src={require('../public/spring.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

            <img src={require('../public/javascript.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

            <img src={require('../public/React.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

            <img src={require('../public/html.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

            <img src={require('../public/css.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

             <img src={require('../public/heroku.jpg')} alt={"Spring"} className="skill-image"/>
            <StarRatingComponent className="star-rating"
                                          size={40}
                                          editing={false}
                                          emptyStarColor={"rgb(195,195,195)"}
                                          value={3.5}
                                    />
                                                                      <br></br>

             <img src={require('../public/postgresql.jpg')} alt={"Spring"} className="skill-image"/>
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
