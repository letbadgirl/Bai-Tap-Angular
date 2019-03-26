import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output('todoname') onHandle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    this.onHandle.emit($event.target.value);
    $event.target.value='';
  }
}
