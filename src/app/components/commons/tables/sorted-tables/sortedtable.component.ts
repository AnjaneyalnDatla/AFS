import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-sortedtable',
  templateUrl: './sortedtable.component.html',
  styleUrls: ['./sortedtable.component.css']
})
export class SortedTableComponent implements OnInit {
  @Input() columns: any[];
  @Input() displayedColumns: string[];
  @Input() dataSource: any;
  @Input() pageOptions: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() onView = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  statusInprogress = {
    'background-color': 'red', 'color': 'white', 'padding': '3px', 'border-radius': '0.2rem'
  }

  statusComplete = {
    'background-color': 'green', 'color': 'white', 'padding': '3px', 'border-radius': '0.2rem'
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, header) => data[header];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id) {
    console.log("id object inside edit" + id);
    this.onView.emit(id);
  }

  delete(id) {
    console.log("id object inside edit" + id);
    this.onDelete.emit(id);
  }
  //displayedColumns = this.columns.map(c => c.columnDef);

}