import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Alerte extends BaseEntity{
    @PrimaryGeneratedColumn()
    alerte_id:number

    @Column()
    date: Date

    @Column()
    statut_alerte:string

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp

    @ManyToOne(()=> Utilisateurs, (utilisateurs)=> utilisateurs.alerte)
    utilisateur: Utilisateurs
}
