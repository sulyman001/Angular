import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Giftcardstonaira';

  constructor(public intercom: Intercom) { }

  ngOnInit(): void {
    // this.intercom.boot({
    //   app_id: environment.appId,
    //   // Supports all optional configuration.
    //   widget: {
    //     "activator": "#intercom"
    //   }
    // });
  }
}
