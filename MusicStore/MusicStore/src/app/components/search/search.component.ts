import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artist: any[] = [];
  loading: boolean;
  constructor(private service: RestService) { }

  searchArtist(search: string) {
    console.log(search);

    this.loading = true;
    this.service.getArtists(search).subscribe((data: any) => {
      console.log(data);
      this.artist = data;
      this.loading = false;
    })
  }
  ngOnInit() {
  }

}
