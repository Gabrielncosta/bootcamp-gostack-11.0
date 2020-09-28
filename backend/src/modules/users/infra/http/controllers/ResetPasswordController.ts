import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPasswordServicce = container.resolve(ResetPasswordService);

    await resetPasswordServicce.execute({
      token,
      password,
    });

    return response.status(204);
  }
}
