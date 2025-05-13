import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-numericas',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './numericas.page.html',
  styleUrls: ['./numericas.page.scss'],
})
export class NumericasPage {
  numerosStr: string = '';
  numerosOrdenados: number[] = [];

  ordenarNumeros() {
    // Limpa o array de resultados
    this.numerosOrdenados = [];
    
    // Remove espaços e divide por vírgulas
    const numerosArray = this.numerosStr.replace(/\s/g, '').split(',');
    
    // Converte para números e filtra valores inválidos
    const numeros = numerosArray
      .map(num => parseFloat(num))
      .filter(num => !isNaN(num));
    
    // Ordena numericamente
    this.numerosOrdenados = numeros.sort((a, b) => a - b);
  }
}