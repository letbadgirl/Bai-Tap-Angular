import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private service: RestService) {
    this.loadingArtist = true;
    this.router.params.subscribe(param => {
      this.getArtist(param['id']);
      this.getTopTracks(param['id']);
    })
  }


  ngOnInit() {
  }
  getArtist(id: string) {
    this.loadingArtist = true;
    this.service.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loadingArtist = false;
    })
  }

  getTopTracks(id: string) {
    this.service.getTopTrack(id).subscribe(topTrack => {
      console.log(topTrack);
      this.topTracks = topTrack;
    })
  }
}
