import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {Http, HTTP_PROVIDERS} from '@angular/http';

platformBrowserDynamic().bootstrapModule(AppModule);