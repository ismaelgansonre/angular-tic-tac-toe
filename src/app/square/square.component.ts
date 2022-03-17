import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
     {{ random }}
    </p>
    <button>{{value}}</button>
  `,
  styles: [
  ]
})
export class SquareComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
  @Input()
  value!: 'X' | 'O';
 random = Math.random();

}
