export default class FetchError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
    toString() {
        return `${this.name}: ${this.message} (Status Code: ${this.statusCode})`;
    }
}