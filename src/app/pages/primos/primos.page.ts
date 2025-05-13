import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-primo',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './primos.page.html',
  styleUrls: ['./primos.page.scss'],
})
export class PrimosPage {
  numero: number = 0;
  resultado: string | null = null;

  verificarPrimo() {
    if (this.numero <= 1) {
      this.resultado = 'não é primo';
      return;
    }

    if (this.numero === 2) {
      this.resultado = 'é primo';
      return;
    }

    for (let i = 2; i <= Math.sqrt(this.numero); i++) {
      if (this.numero % i === 0) {
        this.resultado = 'não é primo';
        return;
      }
    }

    this.resultado = 'é primo';
  }
}