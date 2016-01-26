'use strict';

class Vertex {
    constructor(id) {
        this.id = id;
        this.connectedTo = {};
        this.distance = Number.MAX_SAFE_INTEGER;
        this.color = 'white';
        this.predecessor = 0;
        this.discovery = 0;
        this.finish = 0;
    }

    addConnection(vertex, weight) {
        this.connectedTo[vertex.id] = {
            vertex: vertex, 
            weight: weight
        };
    }

    getConnections() {
        return this.connectedTo;
    }

    getWeight(toVertex) {
        return this.connectedTo[toVertex.id] && this.connectedTo[toVertex.id].weight || 0;
    }

    valueOf() {
        return this.id + ' connectedTo ' + 
            Object
                .keys(this.connectedTo)
                .map((vertexId) => this.connectedTo[vertexId].vertex.id, this).join(',');
    }
}

class Graph {
    constructor() {
        this.vertices = {};
        this.length = 0;
    }

    /**
     * Add new vertex to the graph
     * @param {[type]} vertexId [description]
     */
    addVertex(vertexId) {
        var vertex = new Vertex(vertexId);

        this.vertices[vertexId] = vertex;
        this.length++;

        return vertex;
    }

    /**
     * Get vertex by id
     * @param  {[type]} vertexId [description]
     * @return {[type]}           [description]
     */
    getVertex(vertexId) {
        return this.vertices[vertexId];
    }

    /**
     * Get all vertices in the graph
     * @return {[type]} [description]
     */
    getVertices() {
        return Object.keys(this.vertices);
    } 

    /**
     * Add an edge between two vertices with weight
     * @param {[type]} fromVertexId [description]
     * @param {[type]} toVertexId   [description]
     * @param {[type]} weight     [description]
     */
    addEdge(fromVertexId, toVertexId, weight) {
        if (!this.vertices[fromVertexId]) {
            this.addVertex(fromVertexId);
        }

        if (!this.vertices[toVertexId]) {
            this.addVertex(toVertexId);
        }

        this.vertices[fromVertexId].addConnection(this.vertices[toVertexId], weight);
    }

    /**
     * Array like forEach 
     * @param  {Function} callback [description]
     * @param  {[type]}   thisArg  [description]
     * @return {[type]}            [description]
     */
    forEach(callback, thisArg) {
        Object.keys(this.vertices).forEach(function(vertexId, index) {
            var vertex = this.vertices[vertexId];

            callback.call(thisArg || this, vertex, index);
        }, this);
    }

    /**
     * [map description]
     * @param  {Function} callback [description]
     * @param  {[type]}   thisArg  [description]
     * @return {[type]}            [description]
     */
    map(callback, thisArg) {
        return Object.keys(this.vertices).map(function(vertexId, index) {
            var vertex = this.vertices[vertexId];

            return callback.call(thisArg || this, vertex, index);
        }, this);
    }
}

module.exports = {Vertex, Graph};