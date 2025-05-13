import { Routes } from '@angular/router';
import { ImcPage } from './pages/imc/imc.page';
import { PrimosPage } from './pages/primos/primos.page';
import { VogaisPage } from './pages/vogais/vogais.page';
import { NumericasPage } from './pages/numericas/numericas.page';
import { TabuadaPage } from './pages/tabuada/tabuada.page';
import { PalindromoPage } from './pages/palindromo/palindromo.page';
import { FibonacciPage } from './pages/fibonacci/fibonacci.page';

export const routes: Routes = [
  { path: '', redirectTo: 'imc', pathMatch: 'full' },
  { path: 'imc', component: ImcPage },
  { path: 'primos', component: PrimosPage },
  { path: 'vogais', component: VogaisPage },
  { path: 'numericas', component: NumericasPage },
  { path: 'tabuada', component: TabuadaPage },
  { path: 'palindromo', component: PalindromoPage },
  { path: 'fibonacci', component: FibonacciPage },
];