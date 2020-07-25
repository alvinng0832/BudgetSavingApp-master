import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitube : string;
  longitube: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=e67261d642d894d6b16dc124461d78ae')
  }
}
