export default function WeightCat(result){

    let weightCat;

    switch (true){
        case result<16 : 
            weightCat= 0;
            break;
        case result<18.5 && result >=16: 
            weightCat= 1;
            break;
        case result>=18.5 && result<25 :
             weightCat=2;
             break;
        case result>=25.0 && result<30 :
            weightCat=3;
            break;
        case result>=30 && result<35 :
            weightCat=4;
            break;
        case result>=35 :
            weightCat=5;
            break;
    }

    return weightCat;
}