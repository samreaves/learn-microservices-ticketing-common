import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
    status = 403;

    constructor() {
        super('Forbidden');
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}