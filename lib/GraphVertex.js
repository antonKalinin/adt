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

module.exports = Vertex;