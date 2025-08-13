export default function WeightCat(result){

    let weightCat;

    switch (true){
        case result<18.5 : 
            weightCat= "Underweight";
            break;
        case result>=18.5 && result<=24.9 :
             weightCat="Healthy";
             break;
        case result>=25.0 && result<=29.9 :
            weightCat="Overweight";
            break;
        case result>=30 :
            weightCat="Obese";
            break;

    }

    return weightCat;
}