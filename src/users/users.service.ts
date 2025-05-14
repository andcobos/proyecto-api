import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'Axel Renderos' }];
  
  // getUSers() devuelve una lista simulada de usuarios
  getUsers() {
    return this.users;
  }
  
  //createUser() crea un nuevo usuario y lo agrega a la lista
  createUser(name: string) {
    const newUser = { id: Date.now(), name };
    this.users.push(newUser);
    return newUser;
  }
}