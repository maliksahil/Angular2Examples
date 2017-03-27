import 'zone.js';
import 'reflect-metadata';

import {UpgradeModule} from '@angular/upgrade/static';
import {AppModule} from './app.module';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['contacts-app']);
})