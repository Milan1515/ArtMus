import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exibition } from 'src/app/modal/exibition.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
exibitions: Exibition = new Exibition();

@Input()
  edit: boolean = false;
  @Output()
  editClicked: EventEmitter<void> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(): void {
    this.editClicked.emit()
  }

}
