import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    // não precisa de await no método create, pois somente cria uma instância da classe de usuário
    const user = usersRepository.create({
      name,
      email,
      password,
    });

    // precisa de await no método save, pois ele salva o user no banco
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
