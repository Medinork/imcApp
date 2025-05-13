import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Add this import

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule], // Add RouterModule
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string = '';

  calcularIMC() {
    if (this.altura <= 0 || this.peso <= 0) {
      this.imc = null;
      this.classificacao = 'Valores inválidos';
      return;
    }
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = parseFloat(this.imc.toFixed(2));
    if (this.imc < 18.5) this.classificacao = 'Magreza';
    else if (this.imc < 25) this.classificacao = 'Normal';
    else if (this.imc < 30) this.classificacao = 'Sobrepeso';
    else this.classificacao = 'Obesidade';
  }
}