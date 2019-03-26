import { Component } from '@angular/core';
import { TableServiceService } from './services/table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A simple web app ';
  private _tableService: TableServiceService
  public users: any[] = [];
  public sortBy: string;
  public sortValue: number = 1;
  constructor(_tableService: TableServiceService) {
    this._tableService = _tableService;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }
  getData() {
    this.users = this._tableService.getAll();
  }
  onSort(col){
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }
}
