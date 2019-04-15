import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose({ name: 'name' })
  login: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  registrationDate: number = Date.now();

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  avatar: string;
}
