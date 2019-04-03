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
      Authorization: "Bearer BQAK4kMFbqsOCW-3mZyRAt5i8HIWKQdVlEpSdQrd3YlviorS5YQPmZQ1KTh2U0oeyId6GNWFOGxA45UO_95fRcGCBex0h7o1LG7NteL3nbVy1eY5wouC9fDLhaFtREV1FHrpqgfiiZMVIMJ66LpjYdPzJ-jd1dZMAA"
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
