import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Quartier extends BaseEntity{
    @PrimaryGeneratedColumn()
    quartier_id:number

    @Column()
    nom_quartier: string

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp

    @ManyToOne(()=> Ville, (ville)=> ville.quartiers)
    ville: Ville

    @OneToMany(()=> Utilisateurs, (utilisateur)=> utilisateur.quartie)
    utilisateur: Utilisateurs[]
}
