import { Routes } from "@angular/router";
import { MessengerComponent } from './components/messenger/messenger.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InboxComponent } from './components/list/inbox/inbox.component';
import { FinanceComponent } from './components/list/finance/finance.component';
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/messenger',
        pathMatch: 'full'
    },
    {
        path: 'messenger',
        component: MessengerComponent,
        children: [{
            path: 'inbox',
            component: InboxComponent
        },
        {
            path: 'finance',
            component: FinanceComponent
        },
        {
            path: 'travel',
            component: FinanceComponent
        },
        {
            path: 'personal',
            component: FinanceComponent
        },
        {
            path: 'spam',
            component: FinanceComponent
        },
        {
            path: 'drafts',
            component: FinanceComponent
        },
        {
            path: 'sent',
            component: FinanceComponent
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