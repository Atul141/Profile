import React, { Component } from 'react';

class OverView extends Component{

    render(){
        return(
        <div>
        <p>
         A computer Science Engineer of 2016 batch with 8 month industry experience
         in Agile Software Development.I am prolifilant in TTD, Continuous Integration,
         Continuous Deployment, Agile style of Software development apart from being good
         at both front-end and back-end tech-stacks.
         I am an active contributor to stackOverFlow , gitHub

         </p>
         <img src={"http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/mysql.png"} width={"120"} height={"62"} alt={"error"}/>
         <canvas className="canvas"  id="myCanvas">
           <p>Anything in here will be replaced on browsers that support the canvas element</p>
           <ul>
            <li><a href={"http://mindfsck.net"}><img src={"http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/php.png"} width={"100"} height={"70"}/>PHP</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/aws.png" width="160" height="59"/>Amazon web services</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/android.png" width="80" height="74"/>Android development</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/java.png" width="70" height="128"/>JAVA</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/apache.png" width="120" height="107"/>http apache</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/net.png" width="180" height="77"/>.net</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/netbeans.png" width="115" height="50"/>Netbeans</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/cpp.png" width="70" height="70"/>C++</a></li>
            <li><a href="http://mindfsck.net"><img src="http://mindfsck.net/wp-content/themes/K-BOOM-V.1.0.6/library/images/skills/go.png" width="153" height="55"/>Google golang</a></li>

           </ul>
          </canvas>
         </div>
        );
    }
}
export default OverView;