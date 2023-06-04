import { Alerte } from 'src/alerte/entities/alerte.entity';
import { Collecte } from 'src/collecte/entities/collecte.entity';
import { Collecteur } from 'src/collecteur/entities/collecteur.entity';
import { Pay } from 'src/pays/entities/pay.entity';
import { Quartier } from 'src/quartier/entities/quartier.entity';
import { Ville } from 'src/ville/entities/ville.entity';
import {Entity,PrimaryGeneratedColumn, Column, BaseEntity,OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn, Timestamp } from 'typeorm';

@Entity()
export class Utilisateurs extends BaseEntity{
    @PrimaryGeneratedColumn()
    utilisateur_id: number;

    @Column({
        type: 'varchar', 
        nullable: true 
    })
    nom: string;
    @Column({
        nullable: true
    })

    prenom: string;
    @Column({
        nullable: true
    })
    quartier: string;
    @Column({
        nullable: true
    })
    situation_maritale: string;
    @Column({
        nullable: true
    })
    nombre_enfant: string;
    @Column({
        nullable: true
    })

    telephone: number;
    @Column({
        nullable: true
    })

    adresse_kit: string;
    @Column({
        nullable: true
    })
    passe: string;

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at : Timestamp


    @OneToMany(() => Alerte, (alerte) => alerte.utilisateur) // note: we will create author property in the Photo class below
    alerte: Alerte[]

    @ManyToOne(()=> Pay, (pays)=> pays.utilisateur)
    pays: Pay

    @ManyToOne(()=> Ville, (ville)=> ville.utilisateur)
    ville: Ville

    @ManyToOne(()=> Quartier, (quartie)=> quartie.utilisateur)
    quartie: Quartier

    @OneToMany(()=> Collecte, (collecte) =>collecte.utilisateur)
    collecte: Collecte[]
    // @ManyToMany(()=> Collecteur, (collecteur)=> collecteur.utilisateur)
    // @JoinTable()
    // collecteur: Collecteur[]

}


