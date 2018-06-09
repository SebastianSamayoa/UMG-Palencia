import { RouterModule , Routes  } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blogs/blog1/blog1.component';

const appRoutes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'blog#/', component: Blog1Component },
    { path: '**', component: Blog1Component }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );