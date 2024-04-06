import Angular from "../../assets/angular.jpg"
import Bootstrap from "../../assets/bootstrap5.png"
import Csharp from "../../assets/ccsharp.png"
import Web from "../../assets/kompleweb.jpg"
import "./kurs.css"


const kursMap = {
    "Angular": Angular,
    "Bootstrap": Bootstrap,
    "Csharp": Csharp,
    "Web": Web
}


// eslint-disable-next-line react/prop-types
function Course({kursName}) {
    console.log(kursName)
    console.log(Angular)
    return ( 
        <div className="kurs-div">
            <img className="kurs-img" src={kursMap[kursName]} alt="kurslar" />
        </div>
     );
}

export default Course;
