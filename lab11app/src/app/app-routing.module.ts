import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { AboutComponent } from './about/about.component';
import { TripComponent } from './trip/trip.component';
import { StrongmanComponent } from './strongman/strongman.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { StrongmanDetailComponent } from './strongman-detail/strongman-detail.component';
import { StrongmanAddComponent } from './strongman-add/strongman-add.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'trip', component: TripComponent },
    { path: 'strongman', component: StrongmanComponent },
    { path: 'trip/:id', component: NewsDetailComponent },
    { path: 'strongman/:id', component: StrongmanDetailComponent },
    { path: 'strongmanAdd', component: StrongmanAddComponent },
    { path: '', component: AboutComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
