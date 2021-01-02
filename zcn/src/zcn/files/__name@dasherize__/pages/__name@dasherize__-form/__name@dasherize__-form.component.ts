import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app- <%= (name) %>-form',
  templateUrl: './ <%= (name) %>-form.component.html',
  styleUrls: ['./ <%= (name) %>-form.component.css']
})
export class  <%= (name) %>FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
