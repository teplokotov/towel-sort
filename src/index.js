
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    for (str in matrix) {
        if (str % 2) {
            result = result.concat(matrix[str].reverse());
        } else {
            result = result.concat(matrix[str]);
        }
    }
    return result;
}
