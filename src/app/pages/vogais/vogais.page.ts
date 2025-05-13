import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vogais',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './vogais.page.html',
  styleUrls: ['./vogais.page.scss'],
})
export class VogaisPage {
  texto: string = '';
  quantidadeVogais: number | null = null;

  contarVogais() {
    if (!this.texto.trim()) {
      this.quantidadeVogais = null;
      return;
    }

    const vogais = this.texto.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
    this.quantidadeVogais = vogais ? vogais.length : 0;
  }
}