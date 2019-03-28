import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private _emailService: MailService;
  emails: any[] = [];
  personal: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let index = 0; index < this.emails.length; index++) {
      if (this.emails[index].folder === 'personal') {
        this.personal.push(this.emails[index]);
      }

    }
  }

}
