'use strict';

/**
 * Interface:
 * let matrix = new Matrix(3, 4); // creates new matrix filled of zeros
 * matrix[2][1] = 4
 *
 *
 */
class Matrix {
    constructor(rows = 0, columns = 0, initialValue = 0) {
        super();

        this.rows = rows;
        this.columns = columns;

        for (var j = 0; j < columns; j++) {
            this.matrix[j] = [];

            for (var i = 0; i < rows; i++) {
                this.matrix[j][i] = initialValue;
            }
        }
    }

    get row(index) {

    }

    set row(index, row) {

    }

    get column(index) {

    }

    set column(index, column) {

    }
}

/**
 * Sum two matricies of throw an error if it's not possible
 * @param  {Matrix} a
 * @param  {Mateix} b
 * @return {Matrix}
 */
Matrix.add = (a, b) => {

}

/**
 * Multiply two matricies of throw an error if it's not possible
 * @param  {Matrix} a
 * @param  {Mateix} b
 * @return {Matrix}
 */
Matrix.multiply = (a, b) => {

}

/**
 * Returns an identity matrix with specified size
 * @param  {Number} size
 * @return {Matrix}]
 */
Matrix.identity = (size) => {

}

/**
 * Returns an inversed matrix for given one
 * @param  {Matrix} matrix
 * @return {Matrix}]
 */
Matrix.inverse = (matrix) => {

}

/**
 * Returns a transponse matrix for given one
 * @param  {Matrix} matrix
 * @return {Matrix}]
 */
Matrix.transponse = (matrix) => {

}

module.exports = Matrix;
