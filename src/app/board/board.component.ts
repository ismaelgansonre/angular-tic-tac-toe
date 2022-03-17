import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  square!: any[];
xIsNext!: boolean;
winner!: string;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.square= Array(9).fill(null);
    this.winner= "null";
    this.xIsNext=true;

  }
  get player(){
    return this.xIsNext? 'X':'O';
  }
  makeMove(idx: number){
    if(!this.square[idx])

  {
    this.square.splice(idx,1,this.player);
    this.xIsNext=!this.xIsNext;
  }
  }

}
