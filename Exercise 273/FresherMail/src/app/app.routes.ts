import { Routes } from "@angular/router";
import { MessengerComponent } from './components/messenger/messenger.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InboxComponent } from './components/list/inbox/inbox.component';
import { FinanceComponent } from './components/list/finance/finance.component';
import { TravelComponent } from './components/list/travel/travel.component';
import { PersonalComponent } from './components/list/personal/personal.component';
import { SpamComponent } from './components/list/spam/spam.component';
import { SentComponent } from './components/list/sent/sent.component';
import { DraftsComponent } from './components/list/drafts/drafts.component';
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/messenger/inbox',
        pathMatch: 'full'
    },
    {
        path: 'messenger',
        component: MessengerComponent,
        children: [
            {
                path: '',
                redirectTo: '/messenger/inbox',
                pathMatch: 'full'
            },
            {
                path: 'inbox',
                component: InboxComponent
            },
            {
                path: 'finance',
                component: FinanceComponent
            },
            {
                path: 'travel',
                component: TravelComponent
            },
            {
                path: 'personal',
                component: PersonalComponent
            },
            {
                path: 'spam',
                component: SpamComponent
            },
            {
                path: 'drafts',
                component: DraftsComponent
            },
            {
                path: 'sent',
                component: SentComponent
            }
        ],
    },
    {
        path: 'contact',
        component: ContactsComponent
    },
    {
        path: 'preference',
        component: PreferenceComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]; 