import { CustomError } from './custom-error';

export class InvalidPermissionsError extends CustomError {
    status = 403;

    constructor() {
        super('Forbidden');
        Object.setPrototypeOf(this, InvalidPermissionsError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}