import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'firereport',
  templateUrl: './firereport.component.html',
  styleUrls: ['./firereport.component.scss']
})
export class FirereportComponent implements OnInit {

  constructor() {  }

  lan: number;
  lon: number;

  ngOnInit() {
    this.getCurrentPosition ();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lan = coordinates.coords.latitude;
    this.lon = coordinates.coords.longitude;
  }

  date = new Date();

}
