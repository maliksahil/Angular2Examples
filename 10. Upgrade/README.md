# Angular Upgrade App

Welcome to the Angular Upgrade App. This is a quick tutorial that teaches you how to upgrade your existing AngularJS app to Angular step by step.

The app is written in **ES5** using Angular 1.5.5 and we are upgrading to Angular with the Angular code written in TypeScript.

# Getting Started

1. Clone this repo and run `npm install`
2. Run `npm start` ensure that the app runs.

# Exercises (TOC)

**[Exercise 1: Bootstrap the app via the UpgradeAdapter](#e1)**

**[Exercise 2: Create an ng2 component for the list items and use it within the ng-repeat](#e2)**

**[Exercise 3: refactor ContactsService to ng2 service and register with ng1](#e3)**

<a name="e1"/>
## Exercise 1: Bootstrap the app via the UpgradeAdapter

The goal of this first exercise is to simply throw in Angular and bootstrap the existing AngularJS app via the `UpdateAdapter` provided by Angular.

### Tasks

1. Remove the `ng-app` attribute. Manual bootstrapping is mandatory for the upgrade.

2. Add `@angular/upgrade` in your package.json and run an npm install.

3. Create `app/main.ts` and put the following code in it.

   ```typescript
   import 'zone.js';
   import 'reflect-metadata';

   import {UpgradeModule} from '@angular/upgrade/bundles/upgrade-static.umd';
   import {AppModule} from './app.module';

   import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

   platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
       const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
       upgrade.bootstrap(document.body, ['contacts-app']);
   })
   ```

4. Create a `app/app.module.ts` file and put the following code in it. 

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

   @NgModule({
     imports: [BrowserModule, UpgradeModule],
   })
   export class AppModule {
     ngDoBootstrap() { }
   }
   ```

5. In your `index.ts` file, add an imports to `./app/main.ts` so the Angular code gets bundled also.

6. Go ahead and run `npm start` verify that the application runs as before, but now you are running both frameworks and running a hybrid app.

<a name="e2"/>
## Exercise 2: Create an ng2 component for the list items and use it within the ng-repeat

In this exercise we want to partly replace the `contacts-list-component` with a new component written in TypeScript using Angular.

The goal is not to replace it entirely (just yet) but instead only replace what is repeated within `ng-repeat`. So by the end of this exercise we'll have a good old AngularJS  `ng-repeat` stamping out new Angular components!

### Tasks

1. Create a `Contact` model for a more idiomatic TypeScript usage. Create a new file `app/models/contact.ts` with the following contents.

  ```typescript
  export interface Contact {
      id: number;
      name: string;
      email: string;
  }
  ```

2. Create a `ContactsListItemComponent`

  * Create a new file `app/contacts-list-item-component/contacts-list-item-component.ts` with the following contents

    ```typescript
    import { Component, Input } from '@angular/core';
    import { Contact } from '../models/contact';

    @Component({
      selector: 'contacts-list-item-component',
      template: '<a href="#/contact/{{contact.id}}"><span>{{contact.name}}</span></a>'
    })
    export class ContactsListItemComponent {
      @Input() contact: Contact;
    }
    ```

3. Create a new file `app/downgrades.ts`. We'll use it to expose Angular components as AngularJS directives. In this file, put the following code:

  ```typescript
  import { downgradeComponent } from '@angular/upgrade/bundles/upgrade-static.umd';
  import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

  import { IAngularStatic } from 'angular';
  declare var angular: IAngularStatic;

  angular.module('contacts-app')
      .directive(
      'contactsListItemComponent',
      downgradeComponent({ component: ContactsListItemComponent, inputs: ['contact'] }));
  ```

  ​

4. At the end of `index.ts`add `import './downgrades';`

5. Modify the app.module.ts as follows,

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

   import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

   @NgModule({
     imports: [BrowserModule, UpgradeModule],
     declarations: [ContactsListItemComponent],
     entryComponents: [ContactsListItemComponent]
   })
   export class AppModule {
     ngDoBootstrap() { }
   }
   ```

6. Finally, the template of the `contacts-list-component` to repeat over our new ng2 component

   ```html
   <ul>
     <li ng-repeat="contact in $ctrl.contacts">
       <contacts-list-item-component [contact]="contact"></contacts-list-item-component>
     </li>
   </ul>
   ```

7. Run the app, verify that the results are still the same.

<a name="e3"/>
  ## Exercise 3: refactor ContactsService to ng2 service and register with ng1

At this point we want to rewrite the `ContactsService` as an Angular  service. But since we are still using the service from different AngularJS components we need to make sure that it continues to be available in both worlds. In other words, this time we want to use an Angular service from within AngularJS.

  ### Tasks

1.   Rename the old `contacts-service.es5.js` to `contacts-service.es5.js.dontuse` file and remove it's import from the index.ts file.

2.   Create a file `app/contacts-service/contacts-service.ts` with the following content.

    ```typescript
    import {Injectable} from '@angular/core';

    @Injectable()
    export class ContactsService {
      private CONTACT_DATA = [
        {
          id: 0,
          name: 'Sahil Malik',
          email: 'sahilmalik@winsmarts.com'
        },
        {
          id: 1,
          name: 'Mickey Mouse',
          email: 'contact@winsmarts.com'
        },
        {
          id: 2,
          name: 'Goofy',
          email: 'goofy@winsmarts.com'
        }
      ];

      getContacts () {
        return this.CONTACT_DATA;
      }

      getContact (id: string) {
        return this.CONTACT_DATA.find(contact => contact.id.toString() === id);
      }
    }
    ```

3. In app.module.ts, import the contacts service and provide it as follows,

    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

    import { ContactsService } from './contacts-service/contacts-service';
    import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

    @NgModule({
      imports: [BrowserModule, UpgradeModule],
      declarations: [ContactsListItemComponent],
      entryComponents: [ContactsListItemComponent],
      providers: [ContactsService]
    })
    export class AppModule {
      ngDoBootstrap() { }
    }
    ```

4. In `downgrades.ts` add a downgrade for the contacts service as follows,

  ```typescript
  import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/bundles/upgrade-static.umd';

  import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';
  import { ContactsService } from './contacts-service/contacts-service';

  import { IAngularStatic } from 'angular';
  declare var angular: IAngularStatic;

  angular.module('contacts-app')
      .directive(
      'contactsListItemComponent',
      downgradeComponent({
          component: ContactsListItemComponent,
          inputs: ['contact']
      }));

  angular
    .module('contacts-service', [])
      .service('contactsService', downgradeInjectable(ContactsService));
  ```

5. Run the app, and verify that it still performs the same. You are now injecting an Angular service into AngularJS code.