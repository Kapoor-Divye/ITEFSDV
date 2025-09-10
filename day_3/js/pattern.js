function centeredPyramid(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows + i - 1; j++) {
            if (j <= rows - i) {
                pattern += " ";
            } else {
                pattern += "*";
            }
        }
        pattern += "\n";
    }
    return pattern;
}
console.log(centeredPyramid(5));