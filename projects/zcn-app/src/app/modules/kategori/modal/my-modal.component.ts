import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-my-modal',
    templateUrl: './my-modal.component.html',
    styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {

  @Input() id;
 

  ngOnInit(): void {
      console.log(this.id);
  }
}
