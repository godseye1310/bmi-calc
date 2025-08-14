// import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Category from "./Category.jsx";
import WeightCat from "../Lib/utilfunctions.js";

let bmi = 36 ;
const Result = (props) => {


    let weightType = WeightCat(bmi);

    return(
        <Modal onClose={props.onClose}>
            <div>
                <h5>Your BMI is {bmi}</h5>
                <Category type={weightType}/>
            </div>
            <button onClick={props.onClose}>
                Close
            </button>
        </Modal>
    )
};

export default Result;