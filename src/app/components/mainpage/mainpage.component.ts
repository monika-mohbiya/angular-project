import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-mainpage',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, MatSidenavModule, MatListModule, RouterOutlet],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  constructor(private router: Router) { }
  // routeNav(val: string) {
  //   console.log(val)
  //   this.router.navigateByUrl('/' + val)
  // }
  routeNav(path: string) {
    this.router.navigate([path]);
  }
}
