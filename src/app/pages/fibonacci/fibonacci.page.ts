import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
})
export class FibonacciPage {
  quantidadeTermos: number = 10;
  sequencia: number[] = [];

  gerarFibonacci() {
    // Validar entrada
    const termos = Math.min(Math.max(2, this.quantidadeTermos), 50);
    
    // Gerar sequência
    this.sequencia = [0, 1];
    
    for (let i = 2; i < termos; i++) {
      this.sequencia.push(this.sequencia[i-1] + this.sequencia[i-2]);
    }
  }
}