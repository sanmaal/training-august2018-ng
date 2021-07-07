import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Input() auth;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<DialogComponent>,
    private _userList: AuthService
  ) { }

    submit(login, password) {
      console.log(login, password);
      this._userList.login(login, password)
        .subscribe((data: any) => {
          console.log(data.token);
          localStorage.setItem('1', data.token);
        });
        this.dialogRef.close();
    }

}
