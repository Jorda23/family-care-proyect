// models/Task.ts
import { Table, Column, Model, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';
import { User } from './User';

@Table
export class Task extends Model<Task> {
  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.TEXT)
  description!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
