const car = {
    brand: "Mahindra",
    model: "XUV700",
    year: 2022,
    color: "Red"
}

console.log(car.brand);  // Output: Mahindra
console.log(car["model"]);  // Output: XUV700
console.log(car.year);  // Output: 2022
console.log(car.color);  // Output: Red

function changeModel(obj) {
    obj.model = "Thar";
}

changeModel(car);
console.log(car.model);  // Output: Thar