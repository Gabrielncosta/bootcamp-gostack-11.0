import UserToken from '../infra/typeorm/entities/UserToken';
// import ICreateUserDTO from '../dtos/ICreateUserDTO'

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
