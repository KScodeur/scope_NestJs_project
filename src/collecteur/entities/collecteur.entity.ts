import { Collecte } from "src/collecte/entities/collecte.entity";
import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Collecteur extends BaseEntity {
    @PrimaryGeneratedColumn()
    collecteur_id: number

    @Column()
    nom_collecteur:string

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp

    @OneToMany(()=> Collecte, (collecte)=> collecte.collecteur)
    collecte : Collecte[]

    // @ManyToMany(()=> Utilisateurs, (utilisateur)=> utilisateur.collecteur)
    // utilisateur: Utilisateurs[]
}
