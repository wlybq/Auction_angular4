import {Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, DoCheck {


  @Input()
  public rating: number = 0;
  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();
  @Input()
  public onChange: boolean = true;

  public starts: boolean[];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.starts = [];
    for (let i=1; i<=5; i++) {
      this.starts.push(i > this.rating);
    }
  }

  clickChangeReting(index: number) {
    if (this.onChange) return;
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }
}
