import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ ok: true });
  } catch (err) {}
});

export default sessionsRouter;
