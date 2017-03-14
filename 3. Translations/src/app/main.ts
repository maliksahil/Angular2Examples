import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { Utility } from './services/utility.service';

getTranslationProviders().then(providers => {
    const options = { providers };
    platformBrowserDynamic().bootstrapModule(AppModule, options);
});

export function getTranslationProviders(): Promise<Object[]> {
    let locale = 'es-ES';
    const noProviders: Object[] = [];
    if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
    }
    const translationFile = `../locale/messages.${locale}.xlf`;
    return getTranslationsWithImports(translationFile)
        .then((translations: string) => [
            { provide: TRANSLATIONS, useValue: translations },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ])
        .catch(() => noProviders);
}

function getTranslationsWithImports(file: string) {
    const util = new Utility();
    return util.getFile(file);
}
