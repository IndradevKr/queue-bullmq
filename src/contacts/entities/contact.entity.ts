import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn({ type: 'uuid' })
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
