import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { Recette } from './Recette';
import { RECETTES } from './RecetteList';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'superAngular';
  recetteList: Recette[] = RECETTES;
  recetteSelected: Recette|undefined;
  ngOnInit(): void {
    console.table(this.recetteList);
    // this.selectRecette(this.recetteList[1]);
  }
  selectRecette(recetteId: string):void {
    const index : number = parseInt(recetteId);
    const recette: Recette|undefined = this.recetteList.find(rec=>rec.id === index);
    if(recette)
      {
        console.log(`vous avez selectionnez ${recette.name}`);
      } 
    else
    {
      
      console.log("vous avez selectionnez aucune recette");
     }
     this.recetteSelected = recette;
}
}


