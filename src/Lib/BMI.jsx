// import { useContext } from "react";
import Modal from "../components/UI/Modal.jsx";
import WeightCat from "./WeightCat.js";

let result = 20 ;
const BMI = (props) => {


    let weight = WeightCat(result);

    return(
        <Modal>
            <h1 className="bg-amber-600">Your BMI is 25 and it is {weight}</h1>
        </Modal>
    )
};

export default BMI;