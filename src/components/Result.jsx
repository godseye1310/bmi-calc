// import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Category from "./Category.jsx";
import WeightCat from "../Lib/utilfunctions.js";
import classes from "./Result.module.css"

let bmi = 35 ;
const Result = (props) => {

    let weightType = WeightCat(bmi);

    return(
        <Modal onClose={props.onClose}>
            <div className={classes[weightType.cname]}>
                <h5>Your BMI is {bmi}</h5>
                <Category type={weightType.weightCat}/>
            </div>
            <button onClick={props.onClose}>
                Close
            </button>
        </Modal>
    )
};

export default Result;