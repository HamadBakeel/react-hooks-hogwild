import {useState} from "react";

export default function Hog({hog}){
    const [additionalDetailsVisible, setAdditionalDetailsVisible] = useState(false)
    return(
        <div className="hog-card">
            <div className="details">
                <h3
                    onClick={(e)=>{
                        setAdditionalDetailsVisible(!additionalDetailsVisible)
                    }}
                >{hog.name}</h3>
                {
                    additionalDetailsVisible &&
                    <div className="additional-details">
                        <div>Speciality: {hog.specialty}</div>
                        <div>{hog.greased ? "" : "not"} greased</div>
                        <div>Weight: {hog.weight}</div>
                        <div>highest medal achieved: {hog["highest medal achieved"]}</div>
                        <div>Weight: {hog.weight}</div>
                    </div>
                }
            </div>
            <img src={hog.image} alt=""/>
        </div>
    )
}