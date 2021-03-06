import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import ValidationError from '../../../shared/errors/ValidationError';

export default async function UpdateHostValidation(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const schema = yup.object().shape({
      currentHost: yup.string().required().strict(true),
      newHost: yup.string().required().strict(true),
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  } catch (err) {
    throw new ValidationError(err.errors, 422);
  }
}
