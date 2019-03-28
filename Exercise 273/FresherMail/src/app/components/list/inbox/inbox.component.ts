import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  private _emailService: MailService;
  public emails: any[] = [];
  public inbox: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let i = 0; i < this.emails.length; i++) {
      if (this.emails[i].folder === 'inbox') {
        this.inbox.push(this.emails[i]);
      }
      
    }
  }

}
