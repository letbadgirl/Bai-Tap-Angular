import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';
import { InboxComponent } from './components/list/inbox/inbox.component';
//service
import { MailService } from './services/mail.service';
import { FinanceComponent } from './components/list/finance/finance.component';
import { TravelComponent } from './components/list/travel/travel.component';
import { PersonalComponent } from './components/list/personal/personal.component';
import { SpamComponent } from './components/list/spam/spam.component';
import { DraftsComponent } from './components/list/drafts/drafts.component';
import { SentComponent } from './components/list/sent/sent.component';


@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    ContactsComponent,
    PreferenceComponent,
    NotFoundComponent,
    HeaderComponent,
    MailDetailComponent,
    InboxComponent,
    FinanceComponent,
    TravelComponent,
    PersonalComponent,
    SpamComponent,
    DraftsComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
