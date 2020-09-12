import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'add-todo';
  selectedTheme: string = 'en';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "ar"]);
    translate.setDefaultLang("en");
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
