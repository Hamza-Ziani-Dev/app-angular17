import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListDetailComponent } from './components/to-do-list-detail/to-do-list-detail.component';
import { UploadComponent } from './components/upload/upload.component';

export const routes: Routes = [
  {path: '', component: ToDoListComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'upload', component: UploadComponent},

  { path: 'tododetails/:id', component: ToDoListDetailComponent },
];
