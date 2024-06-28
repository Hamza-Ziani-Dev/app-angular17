import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     RouterLink, 
    NavbarComponent,
    FooterComponent,
     HomeComponent,
     AboutComponent,
     ContactComponent,
     CategoriesComponent,
     ToDoListComponent,
     MatIconModule,MatTooltipModule,MatButtonModule,    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app17';
}
