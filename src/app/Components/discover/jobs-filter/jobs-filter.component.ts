import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.css']
})
export class JobsFilterComponent implements OnInit, AfterViewInit {
  @Output() categoryClicked!: EventEmitter<string>;
  @ViewChild('All') allBtn!: ElementRef;
  selectedCategory: string;

  constructor() { 
    this.categoryClicked = new EventEmitter<string>();
    this.selectedCategory = 'all';
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
  }

  categorySelected(value: string){
    this.categoryClicked.emit(value);
    this.selectedCategory = value;
  }

}
