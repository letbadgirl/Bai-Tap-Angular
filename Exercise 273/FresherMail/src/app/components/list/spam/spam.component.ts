import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent implements OnInit {
  private _emailService: MailService;
  emails: any[] = [];
  spam: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let index = 0; index < this.emails.length; index++) {
      if (this.emails[index].folder === 'spam') {
        this.spam.push(this.emails[index]);
      }

    }
  }

}
