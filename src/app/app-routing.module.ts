import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { AdminAddProjectComponent } from './admin/admin-add-project/admin-add-project.component';
import { OffersComponent } from './profile/offers/offers.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mbuelo-maranda/contactForm', component: ContactComponent },
  { path: 'mbuelo-maranda/Overview', component: ProfileComponent },
  { path: 'mbuelo-maranda/Projects', component: ProjectsComponent },
  { path: 'mbuelo-maranda/Projects/:actualPage', component: ProjectsComponent },
  { path: 'mbuelo-maranda/Service', component: OffersComponent },
  { path: 'mbuelo-maranda/Service/:actualPage', component: OffersComponent },
  { path: 'mbuelo-maranda/timeline', component: TimelineComponent },
  { path: 'mbuelo-maranda-about', component: AboutComponent },
  { path: 'mbuelo-maranda-admin', component: AdminAddProjectComponent },
  { path: 'notfound', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
