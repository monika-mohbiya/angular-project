import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from "./components/mainpage/mainpage.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainpageComponent, FooterComponent, MainpageComponent],
  template: `
    <app-mainpage></app-mainpage>
  `,

})
export class MainLayoutComponent { }
