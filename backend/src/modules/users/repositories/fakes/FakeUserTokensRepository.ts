import { v4 } from 'uuid';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

// import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

class FakeUsersRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: v4(),
      token: v4(),
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }
}

export default FakeUsersRepository;
