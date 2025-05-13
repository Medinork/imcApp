import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './tabuada.page.html',
  styleUrls: ['./tabuada.page.scss'],
})
export class TabuadaPage {
  numeroBase: number = 0;
  tabuada: { multiplicador: number, resultado: number }[] = [];

  gerarTabuada() {
    this.tabuada = [];
    
    if (isNaN(this.numeroBase)) {
      return;
    }
    
    for (let i = 1; i <= 10; i++) {
      this.tabuada.push({
        multiplicador: i,
        resultado: i * this.numeroBase
      });
    }
  }
}