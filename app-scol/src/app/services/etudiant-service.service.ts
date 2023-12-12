import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Specialite } from '../models/specialite'; 

@Injectable({
  providedIn: 'root'
})

export class EtudiantServiceService {
public tabEtud = [ 
  new Etudiant("RIVAN","Claude","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "homme", 20, 11001),
  new Etudiant("Picou","Micha","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "homme", 20, 11001),
  new Etudiant("Messi","Lionel","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "GOAT", 20, 11001),
  new Etudiant("ronaldo","cristiano","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "homme", 20, 11001),
  new Etudiant("noemie ","saintmarie","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "femme", 20, 11001),
  new Etudiant("RIVAN","Claude","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "", 20, 11001),
  new Etudiant("RIVAN","Claude","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "", 20, 11001),
  new Etudiant("RIVAN","Claude","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "", 20, 11001),
  new Etudiant("RIVAN","Claude","24 rue de Montreuil", "75020", "Paris", "ahaha@gmail.com", "", 20, 11001),

]
  constructor() {}
}
