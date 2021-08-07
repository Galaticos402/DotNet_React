export interface ICar{
    color: string,
    model: string,
    topSpeed?: number
}

const Car1:ICar = {
    color: "blue",
    model: "Vinfast"
}

const Car2: ICar = {
    color: "red",
    model: "BMW",
    topSpeed: 100
}

export const cars = [Car1, Car2];