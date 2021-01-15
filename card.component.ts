import { Data } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() course : Data

  constructor() { }

  ngOnInit(): void {
  }

}