import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n-demo';

  constructor(private translateService: TranslateService) {
    // tells service which langs are available for use
    this.translateService.addLangs(['ar', 'en', 'es', 'fr', 'hi', 'ko']);
    // fallback when translation not found in current lang
    this.translateService.setDefaultLang('en');
    // current language to use
    this.translateService.use('en');
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}