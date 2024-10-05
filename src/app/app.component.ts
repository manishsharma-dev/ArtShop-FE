import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './services/translation/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18-ecom';


    constructor(private translate: TranslateService,private translationService: TranslationService) {
      translate.setDefaultLang('en');
      this.translationService.changeLang('en');
    }

}
