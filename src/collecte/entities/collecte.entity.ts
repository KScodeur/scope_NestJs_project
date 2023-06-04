import { Collecteur } from "src/collecteur/entities/collecteur.entity";
import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Collecte extends BaseEntity {
    @PrimaryGeneratedColumn()
    collecte_id:number

    @Column()
    date: Date

    @Column()
    etat: boolean

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp
    
    @ManyToOne(()=> Utilisateurs, (utilisateur)=> utilisateur.collecte)
    utilisateur: Utilisateurs

    @ManyToOne(()=> Collecteur, (collecteur)=> collecteur.collecte)
    collecteur: Collecteur
    

}
