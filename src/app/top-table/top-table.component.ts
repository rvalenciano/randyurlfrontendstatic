import { Component, OnInit, Input } from '@angular/core';

import {TopTable} from './top-table';
import {TopTableService} from './top-table.service';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.css']
})
export class TopTableComponent implements OnInit {
  @Input() data: Object[];
  constructor(private topTableService: TopTableService) { }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.topTableService
    .getTableData()
    .then((topTableData: TopTable) => {
      this.data = topTableData.data;
    });
    
  }

}
