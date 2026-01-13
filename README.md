# NLNG A&P Portal - Help Component Integration Guide

## Overview
This package contains a Help Component for the NLNG A&P Management Portal. Follow the instructions below to integrate it into your existing Angular application.

---

## Files Included

### Help Component (Required)
- `src/app/help/help.component.ts` - Component logic
- `src/app/help/help.component.html` - HTML template with workflow documentation
- `src/app/help/help.component.css` - Styling

### Layout Component with Info Icons (Optional)
- `src/app/layout/layout.component.ts` - Contains tab descriptions and tooltip logic
- `src/app/layout/layout.component.html` - Sidebar menu with info icons
- `src/app/layout/layout.component.css` - Tooltip and menu styling

---

## Integration Steps

### Step 1: Copy the Help Component Files

Copy the `help` folder into your project's `src/app/` directory:

```
your-project/
  src/
    app/
      help/                    <-- Copy this folder
        help.component.ts
        help.component.html
        help.component.css
```

### Step 2: Update the Component Decorator

If your project uses **NgModules** (not standalone), modify `help.component.ts`:

**Change FROM (standalone):**
```typescript
@Component({
  selector: 'app-help',
  standalone: true,
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
```

**Change TO (NgModule):**
```typescript
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
```

### Step 3: Register in Your Module (if using NgModules)

Add the HelpComponent to your module's declarations:

```typescript
// In your app.module.ts or feature module
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    // ... other components
    HelpComponent
  ],
  // ...
})
export class AppModule { }
```

### Step 4: Add Route (if using Angular Router)

Add a route to the help page in your routing module:

```typescript
// In your app-routing.module.ts
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  // ... other routes
  { path: 'help', component: HelpComponent }
];
```

### Step 5: Add Required Dependencies

Ensure these are included in your `index.html` or `angular.json`:

**Font Awesome (for icons):**
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
```

**Bootstrap (for layout classes):**
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
```

Or via angular.json styles array:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

---

## Adding Info Icons to Your Existing Sidebar

If you want to add the info icon tooltips to your existing sidebar menu, you have two options:

### Option A: Copy the Tab Descriptions Only

Copy the `tabInfoMap` object from `layout.component.ts` into your existing sidebar component. This contains all the tab descriptions:

```typescript
tabInfoMap = {
  'request-assessment': {
    name: 'Request Assessment',
    role: 'Trainees / Operators',
    description: 'Submit requests for skill assessments...'
  },
  // ... other tabs
};
```

### Option B: Use the Full Layout Component

Replace your existing layout/sidebar with the provided `layout` component files.

---

## Customization

### Updating Tab Descriptions

Edit `layout.component.ts` and modify the `tabInfoMap` object to update any tab's:
- `name` - Display name
- `role` - Who uses this tab
- `description` - What the tab does

### Updating Help Content

Edit `help.component.html` to modify:
- General workflow steps
- Role-based workflow details
- Navigation tabs reference table
- Assessment flow diagram

### Styling Changes

Edit `help.component.css` to change:
- Colors (search for `#1a5d3a`, `#1e8a6e` for green theme)
- Spacing and layout
- Font sizes

---

## Testing

After integration, verify:
1. Navigate to the Help page - content should display correctly
2. Click info icons on sidebar - tooltips should appear
3. Check responsive behavior on mobile devices
4. Verify all icons load (Font Awesome)

---

## Support

For questions or issues with integration, contact the development team.
