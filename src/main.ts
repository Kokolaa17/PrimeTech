import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {
  register as swiperRegisterElement
} from 'swiper/element/bundle';

swiperRegisterElement();
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
