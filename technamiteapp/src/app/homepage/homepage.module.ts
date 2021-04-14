import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    declarations: [NavbarComponent, HomepageComponent, ContactComponent],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})

export class HomepageModule { }