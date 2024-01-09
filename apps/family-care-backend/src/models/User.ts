// models/User.ts
import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Task } from './Task';

@Table
export class User extends Model<User> {
  @Column(DataType.STRING) // Specify the data type here
  name!: string;

  @Column(DataType.STRING) // Assuming email is also a string
  email!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}
