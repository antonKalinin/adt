'use strict';

module.exports = class Matrix2D {
    constructor(rows, columns, valueFunction) {
        this.rows = rows;
        this.columns = columns;

        this.matrix = [];

        for (var j = 0; j < columns; j++) {
            this.matrix[j] = [];

            for (var i = 0; i < rows; i++) {
                var cell = 0;

                if (typeof(valueFunction) == 'function') {
                    cell = valueFunction(i, j);
                }

                this.matrix[j][i] = cell;
            }
        }
    }
}