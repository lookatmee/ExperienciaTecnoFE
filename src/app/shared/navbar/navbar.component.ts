import { Component } from '@angular/core';
import { MenuItem } from './models/navbar.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected menuItems: MenuItem[] = [
    {
      class: 'fa-brands fa-whatsapp',
      url: 'https://wa.me/573103593479'
    },
    {
      class: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/adolfojinete'
    },
  ];

}
