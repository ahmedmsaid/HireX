import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})

export class JobCardComponent implements OnInit {
  @Input() category!: string;
  @Input() position!: string;
  @Input() place!: string;
  @Input() type!: string;
  @Input() company!: string;
  @Input() date!: Date;

  constructor() { }

  ngOnInit() {
  }

}
