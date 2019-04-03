import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSong: any[];
  loading: boolean;
  error: boolean;
  messError: string;
  constructor(private service: RestService) {
    this.loading = true;
    this.error = false;

    this.service.getNewRelases().subscribe((data: any) => {
      console.log(data);
      this.newSong = data;
      this.loading = false;
    }
    );
  }

  ngOnInit() {
  }

}
