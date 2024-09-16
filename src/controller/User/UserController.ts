import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
import UserRepository from "../../repositories/user/UserRepositories";
import TokenRepository from "../../repositories/token-table/token-repository";
import PasswordRepository from "../../repositories/password-table/password-repository";
import CredentialRepository from "../../repositories/credential-table/credentail-repository";
import IConfig from "../../config/IConfig";
import config from '../../config/configuration';

class UserController {
  private userRepository: UserRepository = new UserRepository();
  private tokenRepository: TokenRepository = new TokenRepository();
  private passwordRepository: PasswordRepository = new PasswordRepository();
  private credentialRepository: CredentialRepository = new CredentialRepository();
  private config: IConfig;
  static instance: UserController;
  constructor(config: IConfig) {
    this.config = config;
  }
  static getInstance = () => {
    if (!UserController.instance) {
      return (UserController.instance = new UserController(config));
    }
    return UserController.instance;
  };
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      const encryptPassword = await bcrypt.hash(password, 10);
      const user = Object.assign({
        email,
        firstName,
        lastName,
        password: encryptPassword,
      });
      const data = await this.userRepository.create(user);
      const { id } = data;
      delete data.password;
      await Promise.all([
        this.credentialRepository.create({ userId: id, passwordHash: encryptPassword, lastLogin: new Date() }),
        this.passwordRepository.create({ userId: id, passwordHash: encryptPassword,  }),
      ]);
        res.send({
          status: 200,
          message: "User Added Successfully",
          data,
        });
    } catch (error) {
      console.log(`Error In Registeration ${error}`);
      res.send({
        status: error.status,
        message: error.message,
      });
    }
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const userData = await this.userRepository.get({ email });
      if(!userData){
        throw new Error('NO USER EXIST');
      }

      const match = await bcrypt.compare(password, userData.password);
      console.log(userData, match);
      if(!match){
        throw new Error('Wrong Id and password');
      }
      const user = Object.assign({
       ...userData
      });
      const refreshToken =  jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        ...user
      }, this.config.PRIVATE_KEY, { algorithm: 'RS256' });
      const accessToken =  jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 15),
        ...user
      }, this.config.PRIVATE_KEY, { algorithm: 'RS256' });

      await Promise.all([
        this.tokenRepository.create({ userId: userData.id,  refreshToken }),
      ]);
      
      const options = {
        httpOnly: true,
        secure: true
      }
        res.
        cookie('accessToken', accessToken, options).
        cookie('refreshToken', refreshToken, options).
        send({
          status: 200,
          message: "User login Successfully",
        });
    } catch (error) {
      console.log(`Error In Registeration ${error}`);
      res.send({
        status: error.status,
        message: error.message,
      });
    }
  };

  refreshToken = async (req: Request, res: Response, next: NextFunction) => {
     const accessToken = req.headers.authorization;

  }
}

export default UserController.getInstance();
