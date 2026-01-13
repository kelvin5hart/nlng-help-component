import { Component } from '@angular/core';

/**
 * HelpComponent provides a static help section for the NLNG A & P Management portal.
 *
 * This component is intended to be added to the existing Angular application to
 * provide end users with guidance on the portal's workflow, navigation tabs
 * and best practices. The content is static, so there is no associated
 * business logic at this time. Styling uses Bootstrap utility classes for
 * spacing and readability. Feel free to extend this component with additional
 * logic (e.g. fetching help articles from a service) if you later decide to
 * manage help content dynamically.
 */
@Component({
  selector: 'app-help',
  standalone: true,
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent { }