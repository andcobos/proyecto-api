import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [{ id: 1, title: 'Estudiar Nestjs'}];

    findAll() {
        return this.tasks;
    }

    create(title: string) {
        const newTask = { id: Date.now(), title };
        this.tasks.push(newTask);
        return newTask;
    }
}
