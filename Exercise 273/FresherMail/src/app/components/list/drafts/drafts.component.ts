import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  private _emailService: MailService;
  emails: any[] = [];
  drafts: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let index = 0; index < this.emails.length; index++) {
      if (this.emails[index].folder === 'drafts') {
        this.drafts.push(this.emails[index]);
      }

    }
  }

}
