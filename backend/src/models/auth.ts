import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Unique } from 'typeorm/decorator/Unique';

@Entity()
@Unique(['token'])
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.id)
  user: User;

  @Column()
  token: string = generateToken();
}

function generateToken() {
  function toHash(data: number) {
    return data.toString(31).slice(2);
  }

  const randomSeed = toHash(Math.random());
  const date = toHash(Date.now());
  return Buffer.from(randomSeed + date).toString('base64');
}
