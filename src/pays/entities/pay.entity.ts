import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { BaseEntity, Column, PrimaryGeneratedColumn,Entity, OneToMany, CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Pay extends BaseEntity{
    @PrimaryGeneratedColumn()
    pays_id: number

    @Column()
    nom_pays: string

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp

    @OneToMany(()=> Utilisateurs, (utilisateur)=> utilisateur.pays)
    utilisateur: Utilisateurs[]

    @OneToMany(()=> Ville, (ville)=> ville.pays)
    ville: Ville[]


}
