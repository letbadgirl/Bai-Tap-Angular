import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  private _emailService: MailService;
  public emails: any[] = [];
  public finance: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let i = 0; i < this.emails.length; i++) {
      if (this.emails[i].folder === 'finance') {
        this.finance.push(this.emails[i]);
      }
      
    }
  }
}
