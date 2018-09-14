import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private _userList: AuthService
  ) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
     });
     dialogRef.afterOpen().subscribe(result => {
      console.log('The dialog was opend');
      console.log(result + ' test');
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  public logout() {
    this._userList.logout()
      .subscribe();
  }

  getAuth() {
    return this._userList.getAuth;
  }

  }
