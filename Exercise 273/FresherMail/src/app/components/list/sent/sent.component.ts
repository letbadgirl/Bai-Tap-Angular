import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  private _emailService: MailService;
  emails: any[] = [];
  sent: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let index = 0; index < this.emails.length; index++) {
      if (this.emails[index].folder === 'sent') {
        this.sent.push(this.emails[index]);
      }

    }
  }

}
