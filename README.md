# RestGrid

[![Build Status](https://api.travis-ci.org/sarbull/rest-grid.svg?branch=master)](https://travis-ci.org/sarbull/rest-grid)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Example
```html
<rg-rest-grid [endpoint]="endpoint" (onActionClick)="onActionClick($event)"></rg-rest-grid>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'rg-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  endpoint: String = '/api/elements';

  onActionClick(data): void {
    console.log('parent', data);
  }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Documentation

## Filtering

| Types              | Description                             |
|:------------------ |:--------------------------------------- |
| numberColumnFilter | A Number Filter for number comparisons. |
| textColumnFilter   | A Text Filter for string comparisons.   |
| dateColumnFilter   | A Date Filter for date comparisons.     |
| setColumnFilter    | A set of data filter type.              |

## Sorting

|  Types             | Description                |
|:------------------ |:-------------------------- |
| numberComparator   | Sorting for numbers.       |
| textComparator     | Sorting for strings.       |
| dateComparator     | Sorting for date entities. |

## Current "tree -I node_modules"
```
.
|-- LICENSE
|-- README.md
|-- api
|   |-- elements
|   |   |-- data.json
|   |   `-- grid.json
|   `-- index.js
|-- config
|   |-- environment.prod.ts
|   `-- environment.ts
|-- copy.js
|-- e2e
|   |-- app.e2e-spec.ts
|   |-- app.po.ts
|   `-- tsconfig.e2e.json
|-- example
|   |-- app
|   |   |-- app.component.html
|   |   |-- app.component.scss
|   |   |-- app.component.ts
|   |   `-- app.module.ts
|   |-- assets
|   |-- favicon.ico
|   |-- index.html
|   |-- main.ts
|   |-- polyfills.ts
|   |-- test.ts
|   |-- tsconfig.app.json
|   |-- tsconfig.spec.json
|   `-- typings.d.ts
|-- karma.conf.js
|-- ng-package.json
|-- package-lock.json
|-- package.json
|-- protractor.conf.js
|-- proxy.conf.json
|-- src
|   |-- contextual-menu
|   |   |-- contextual-menu.component.html
|   |   |-- contextual-menu.component.ts
|   |   `-- contextual-menu.module.ts
|   |-- filters
|   |   |-- date
|   |   |   |-- date-filter.component.css
|   |   |   |-- date-filter.component.html
|   |   |   `-- date-filter.component.ts
|   |   |-- number
|   |   |   |-- number-filter.component.css
|   |   |   |-- number-filter.component.html
|   |   |   `-- number-filter.component.ts
|   |   `-- string
|   |       |-- string-filter.component.css
|   |       |-- string-filter.component.html
|   |       `-- string-filter.component.ts
|   |-- index.ts
|   |-- options
|   |   `-- grid-options.interface.ts
|   |-- rest-grid.component.html
|   |-- rest-grid.component.spec.ts
|   |-- rest-grid.component.ts
|   |-- rest-grid.module.ts
|   `-- rest-grid.scss
|-- tsconfig.json
`-- tslint.json

14 directories, 50 files
```
