import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, nombre: 'Andrea', correo: 'andrea@mail.com' },
    { id: 2, nombre: 'Masciel', correo: 'masciel@mail.com' },
    { id: 3, nombre: 'Axel', correo: 'axel@mail.com' }
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: { nombre: string; correo: string }) {
    const nuevoUsuario = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(nuevoUsuario);
    return nuevoUsuario;
  }
}