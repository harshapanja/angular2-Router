import { Component } from '@angular/core';
@Component({
  template: `
    <h2>CRISIS CENTER is here</h2>
    <p> {{date | date:'shortDate'}}Get your crisis here</p>`
})
export class CrisisListComponent {
	date = new Date()
 }
