import { Pay } from "src/pays/entities/pay.entity";
import { Quartier } from "src/quartier/entities/quartier.entity";
import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn, Timestamp} from "typeorm";

@Entity()
export class Ville extends BaseEntity{
    @PrimaryGeneratedColumn()
    ville_id:number

    @Column()
    nom_ville: string

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp

    @ManyToOne(()=> Pay, (pays)=> pays.ville)
    pays: Pay

    @OneToMany(()=> Quartier, (quartiers)=> quartiers.ville)
    quartiers: Quartier[]

    @OneToMany(()=> Utilisateurs, (utilisateur)=> utilisateur.ville)
    utilisateur: Utilisateurs[]
}
