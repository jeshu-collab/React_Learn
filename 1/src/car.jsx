
import { useState } from "react";
export default function Car() {

    const [car, setCar] = useState({
        car: "Ford",
        model: "Mustang",
        year: "1964",
    });
    const updateCar = () => {
        setCar((prevCar) => {
            return { ...prevCar, car: "Chevrolet", model: "Camaro", year: "2020" };
        });
    };
    return (
        <>
            <h1>{car.car} {car.model} {car.year}</h1>
            <button onClick={updateCar}>Update Car</button>
        </>

    )
}