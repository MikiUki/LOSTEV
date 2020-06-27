import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  infoContent = ""

  constructor(private ruter: Router) { }

  markers: any[];
  center: google.maps.LatLngLiteral;

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,

  }



  ngOnInit(): void {

    this.center = {
      lat: 44.805503,
      lng: 20.476134
    }

    this.markers = JSON.parse(localStorage.getItem('markers'));


  }

  openInfo(marker: google.maps.Marker, content, markerelem: MapMarker) {
    this.infoContent = content;
    this.infoWindow.open(markerelem)
  }

  submit() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
    this.ruter.navigate(['/submit'])

  }



}
