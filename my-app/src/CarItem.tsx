import React from "react";
import {ICar} from "./demo";
interface IProps {
    car: ICar,
    method?:string
}
const CarItem = (props:IProps) => {
    return(
        <div>
            <h1>{props.car.color}</h1>
        </div>
    )
}

export default CarItem;