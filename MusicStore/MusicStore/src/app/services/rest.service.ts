import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  getData(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: "Bearer BQD2aYSXcOY2JwKOsdCoiRA5S42SBWte7iNYTt79uNLcyUixq1UPWsjdKvEg2uRbmHWGtzV-L26VI_ieiox11-0gTluT-EUPUeHa0atKyifV--Kv1abwanf7zb7nA8UoQaOzqtPwsOL4fqT8ZMrjKaubqPdNbaFqBA"
    });
    return this.http.get(url, { headers });
  }

  getNewRelases() {
    return this.getData("browse/new-releases?limit=20").pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getData(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtist(id:string){
    return this.getData(`artists/${id}`);
  }

  getTopTrack(id: string) {
    return this.getData(`artists/${id}/top-tracks?country=vn`).pipe(map(data => data["tracks"]));
  }
}
