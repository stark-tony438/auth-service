import UserRepository from '../../repositories/user/UserRepositories';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';

class TokenController {
  private userRepository: UserRepository = new UserRepository();
  static instance;
  static getInstance = (): TokenController => {
    if (!TokenController.instance) {

      return TokenController.instance = new TokenController();
    }
    return TokenController.instance;
  }

  create = async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const { password: loginPassword } = userData;
    const encryptPassword = await bcrypt.hash(loginPassword, 10);
    const user = Object.assign(userData, { password: encryptPassword });
    console.log(user);
    const data = await this.userRepository.create(user);
    console.log('data----------------', data);
    res.send(data);
  }

  list = async (req: Request, res: Response) => {
    const { skip, limit, sortBy, ...query } = req.query;
    const options = { skip: Number(skip), limit: Number(limit), sortBy };
    const data = await this.userRepository.list(query, options);
    res.send(data);
  }

  update = (req: Request, res: Response) => {
    const { id, dataToUpdate } = req.body;
    const data = this.userRepository.update(id, dataToUpdate);
    res.send(data);
  }

  delete = async (req: Request, res: Response) => {
    console.log('------delete----------');
    const { id } = req.params;
    console.log(id)
    const data = await this.userRepository.delete(id);
    res.send(data);
  }
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const data = await this.userRepository.get({ email, password });
    console.log('---------login------------',data);
    res.send(data);
  }

}
export default TokenController.getInstance();