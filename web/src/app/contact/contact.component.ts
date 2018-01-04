import { Component } from '@angular/core';

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
