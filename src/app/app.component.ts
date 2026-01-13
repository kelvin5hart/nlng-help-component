import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HelpComponent } from './help/help.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, HelpComponent],
  template: `
    <app-layout>
      <app-help></app-help>
    </app-layout>
  `
})
export class AppComponent {}
