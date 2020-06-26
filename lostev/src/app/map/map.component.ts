import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  infoContent = ""

  constructor() { }

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

    this.markers = [
      {
        position: new google.maps.LatLng(44.805503, 20.476134),
        title: "Marker 1",
        label: { text: "E", color: 'orange' },
        options: { animation: google.maps.Animation.DROP },
        info: "Event: Heart attack" + '<br/>' + "Age: 65" + "<br/>" + "Gender: Male"
      },
      {
        position: new google.maps.LatLng(44.805503, 20.47),
        title: "Marker 2",
        label: { text: "F", color: 'brown' },
        options: { animation: google.maps.Animation.DROP },
        info: "Event: Fire inside apartment building" + '<br/>' + "Number of people: 3+" + '<br/>' + "Floors: 3-5"
      },
      {
        position: new google.maps.LatLng(44.8, 20.48),
        title: "Marker 3",
        label: { text: "P", color: 'blue' },
        options: { animation: google.maps.Animation.DROP },
        info: "Event: Riot in the streets" + '<br/>' + "Number of people: 500+" + '<br/>' + "Violent: Yes"
      }

    ];


  }

  openInfo(marker: google.maps.Marker, content, markerelem: MapMarker) {
    this.infoContent = content;
    this.infoWindow.open(markerelem)
  }

  submit() {

  }



}
