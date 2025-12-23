import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpecieDetails1 } from "./specie-details1/specie-details1";
// import { Ngmain3 } from "./authority/ngmain3";
import { Ngmain3 } from './authority-details/authority-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpecieDetails1, Ngmain3],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wipo');
}
