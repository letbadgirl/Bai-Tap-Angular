import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  private _emailService: MailService;
  public emails: any[] = [];
  public travel: any[] = [];
  constructor(_emailService: MailService) {
    this._emailService = _emailService;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emails = this._emailService.getAll();
    for (let index = 0; index < this.emails.length; index++) {
      if (this.emails[index].folder === 'travel') {
        this.travel.push(this.emails[index]);
      }
    }
  }
}
