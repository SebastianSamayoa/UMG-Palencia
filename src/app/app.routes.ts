import { RouterModule , Routes  } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { Blog6Component } from './blogs/blog6/blog6.component';
import { Blog2Component } from './blogs/blog2/blog2.component';
import { Blog3Component } from './blogs/blog3/blog3.component';
import { Blog4Component } from './blogs/blog4/blog4.component';
import { Blog5Component } from './blogs/blog5/blog5.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'blog1', component: Blog1Component },
    { path: 'blog2', component: Blog2Component },
    { path: 'blog3', component: Blog3Component },
    { path: 'blog4', component: Blog4Component },
    { path: 'blog5', component: Blog5Component },
    { path: 'blog6', component: Blog6Component },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: BlogComponent }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );