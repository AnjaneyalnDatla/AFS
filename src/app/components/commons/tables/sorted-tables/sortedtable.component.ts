import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';

@Component({
  selector: 'app-sortedtable',
  templateUrl: './sortedtable.component.html',
})
export class SortedTableComponent implements OnInit {
  @Input() columns: any[];
  @Input() displayedColumns: string[];
  @Input() dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() onView = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id){
    console.log("id object inside edit"+id);
    this.onView.emit(id);
  }

  delete(id){
    console.log("id object inside edit"+id);
    this.onDelete.emit(id);
  }
  //displayedColumns = this.columns.map(c => c.columnDef);
  
}