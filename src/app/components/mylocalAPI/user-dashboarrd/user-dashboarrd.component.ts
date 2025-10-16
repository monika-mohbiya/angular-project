import { Component, inject } from '@angular/core';
import { MyAPIlocallyService } from '../../../services/my-apilocally.service';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboarrd',
  imports: [MatTableModule, MatTooltipModule],
  templateUrl: './user-dashboarrd.component.html',
  styleUrl: './user-dashboarrd.component.scss'
})
export class UserDashboarrdComponent {
  displayedColumns: string[] = ['Id', 'Name', 'Address', 'Qualification', 'Blog_Name', "Blog_Details", "Mobile_No"];
  dataSource: any[] = [];
  userService = inject(MyAPIlocallyService);
  router = inject(Router);
  users: any;
  ngOnInit() {
    this.userData()
  }
  async userData() {
    try {
      this.users = await this.userService.userviews();
      this.dataSource = this.users;
      console.log(this.users)
    } catch (error) {
      console.error('❌ Failed to fetch product view:', error);
    }
  }



  backtoPage() {
    this.router.navigateByUrl('/user-form');
  }
  openCreateForm() {

  }
}
