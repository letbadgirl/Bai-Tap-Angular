import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      currentPos: new FormControl('', []),
      radio_buttons: new FormControl('', [Validators.required]),
      mostLike: new FormControl('', []),
      prefer: new FormControl('', []),
      comment: new FormControl('', [])
    });
  }
  createForm() {
    this.formGroup = this._formBuilder.group({

    });
  }
}
