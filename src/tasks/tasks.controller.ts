import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks():string {
        return 'Hola tareas';
    }

    @Post()
    createTask(@Body() task): string{
        console.log(task)
        return 'creating a task';
    }
    
    @Put()
    updateTask(): string {
        return 'updating a task';
    }

    @Delete()
    deleteTask(): string {
        return 'deleting a task'
    }



}
