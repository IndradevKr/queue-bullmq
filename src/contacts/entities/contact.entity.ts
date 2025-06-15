import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  @IsUUID()
  id: string;

  @Column({ length: 60 })
  @IsString()
  firstName: string;

  @Column({ length: 60 })
  @IsOptional()
  @IsString()
  lastName: string;

  @Column({ length: 254 })
  @IsEmail()
  email: string;

  @Column({ length: 20 })
  @IsOptional()
  @IsString()
  phone: string;

  @Column({ length: 90 })
  @IsOptional()
  @IsString()
  country: string;
}
