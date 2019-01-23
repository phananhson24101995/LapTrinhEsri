import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A', age: 23},
  {position: 2, name: 'B', age: 27},
  {position: 3, name: 'B', age: 35}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'age'];
  //dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<PeriodicElement>;
  @ViewChild('name') name: ElementRef;
  @ViewChild('age') age: ElementRef;
  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  tbnClick(){
    ELEMENT_DATA.push({position: 4, name: this.name.nativeElement.value, age: this.age.nativeElement.value});
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

}


