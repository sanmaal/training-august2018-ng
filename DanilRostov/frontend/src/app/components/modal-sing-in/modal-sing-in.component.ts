import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-modal-sing-in',
  templateUrl: './modal-sing-in.component.html',
  styleUrls: ['./modal-sing-in.component.css']
})
export class ModalSingInComponent implements OnInit {

  constructor(private modalsService: ModalsService) { }

  ngOnInit() {
  }

  onSingInModalClose() {
    this.modalsService.singInModalToggle();
  }

  signIn() {
    console.log(1);
  }

}
