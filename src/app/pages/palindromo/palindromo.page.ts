import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-palindromo',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './palindromo.page.html',
  styleUrls: ['./palindromo.page.scss'],
})
export class PalindromoPage {
  texto: string = '';
  resultado: boolean | null = null;
  textoOriginal: string = '';

  verificarPalindromo() {
    if (!this.texto.trim()) {
      this.resultado = null;
      return;
    }

    this.textoOriginal = this.texto;
    const textoFormatado = this.texto
      .toLowerCase()
      .replace(/[\W_]/g, ''); // Remove acentos, espaços e pontuações

    this.resultado = textoFormatado === textoFormatado.split('').reverse().join('');
  }
}