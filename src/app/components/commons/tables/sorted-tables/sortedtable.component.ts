import { Component, OnInit, ViewChild, AfterViewInit,Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';

@Component({
  selector: 'app-sortedtable',
  templateUrl: './sortedtable.component.html',
})
export class SortedTableComponent implements OnInit {
  @Input() displayedColumns: string[];
  @Input() dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

}