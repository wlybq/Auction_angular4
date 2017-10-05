import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating:number = 0;

  private starts: boolean[];

  constructor() { }

  ngOnInit() {
    this.starts = [];
    for (let i=1; i<=5; i++) {
      this.starts.push(i > this.rating);
    }
  }

}
