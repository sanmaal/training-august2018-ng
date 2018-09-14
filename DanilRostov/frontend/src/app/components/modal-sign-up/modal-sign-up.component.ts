import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.css']
})
export class ModalSignUpComponent implements OnInit {

  constructor(private modalsService: ModalsService) { }

  ngOnInit() {
  }

  onSingUpModalClose() {
    this.modalsService.singUpModalToggle();
  }

  signUp() {
    console.log('data');
  }
}
