import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean=false;

  toggleMobileMenu(){
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
