import { Link } from "react-router-dom";
import Pic from "./food.png";

function About(){
    return (
        <>
        <div className="about-box">
            <h2 className="heading">About</h2>
            <div>
                <p>This is a React app made for ReactJS elective course at University of Plovdiv, Faculty of Mathematics and Informatics</p>
                <p>The app represents a fast and easy way to manage food nutritions (add new foods or retrieve existing ones).</p>
                <p>Users can pick foods and add them to their Selected List which will calculate the total nutrition of all these foods.</p>
                <p>The app is dependant on <b>Backend</b> and <b>Database</b>, so if you haven't set up the API yet, please read <b><Link className="link" to={"/api"}>this article</Link></b>.</p>
            </div>
            <img width={150} style={{marginTop:20}} alt="logo" src={Pic}></img>
        </div>
        </>
    );
}

export default About;