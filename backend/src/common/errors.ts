import { HttpStatus } from "@nestjs/common";

export class CustomError extends Error {
    private readonly httpStatus: number;
    private readonly status: number;

    constructor(message: string, httpStatus = 500, status = 0) {
        super(message);
        this.status = status;
        this.httpStatus = httpStatus;
    }

    getResponse() {
        const response: any = {
            statusCode: this.getStatus(),
            error: this.getHttpStatus(),
        };
        const message = this.getMessage();
        if (message) response.message = message;

        return response;
    }

    getMessage(): any {
        return this.message;
    }

    getStatus(): number {
        return this.status;
    }

    getHttpStatus(): number {
        return this.httpStatus;
    }
}

export class BadRequestError extends CustomError {
    constructor(message: string = '') {
        super(message, 400, HttpStatus.BAD_REQUEST);
    }
}

export class ForbiddenError extends CustomError {
    constructor(message: string) {
        super(message, 403, HttpStatus.FORBIDDEN);
    }
}

export class InternalServerError extends CustomError {
    constructor(message: string) {
        super(message, 500, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

export class MongooseError extends CustomError {
    constructor(error) {
      const isDuplicatedError = error.name === 'MongoError' && error.code === 11000;
      super(
        error.message,
        isDuplicatedError ? 409 : 422,
        isDuplicatedError ? HttpStatus.CONFLICT : HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }