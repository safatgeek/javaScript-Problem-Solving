const perimeter = (figure, radius, length, width) => {
    switch(figure) {
        case "circle" : return 2 * Math.PI * radius;

        case "rectangle" : return 2 * (length + width);

        case "square" : return 4 * length;

        default: "Invalid figure";
    }
}

console.log(perimeter("circle", 2 ));
console.log(perimeter("rectangle",null, 2, 3 ));