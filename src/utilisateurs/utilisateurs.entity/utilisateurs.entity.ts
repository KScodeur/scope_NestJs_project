import {Entity,PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Utilisateurs extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar', 
        nullable: true 
    })
    nom: string;
    @Column({
        nullable: true
    })
    passe: string
}


