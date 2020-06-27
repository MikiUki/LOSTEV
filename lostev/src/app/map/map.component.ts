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
        options: { animation: google.maps.Animation.BOUNCE },
        info: "Event: Heart attack" + '<br/>' + "Age: 65" + "<br/>" + "Gender: Male"
      },
      {
        position: new google.maps.LatLng(44.811516, 20.478889),
        title: "Ambulance Palilula",
        label: { text: "A", color: 'brown' },
        options: { animation: google.maps.Animation.DROP },
        info: "Ambulance" + '<br/>' + "Number of available vehicles: 4" + '<br/>'
      },
      {
        position: new google.maps.LatLng(44.800152, 20.480334),
        title: "Marker 3",
        label: { text: "P", color: 'blue' },
        options: { animation: google.maps.Animation.DROP },
        info: "Police Department" + '<br/>' + "Number of available people: 34"
      },

      {
        position: new google.maps.LatLng(44.811975, 20.487802),
        title: "Fire Department",
        label: { text: "F", color: 'brown' },
        options: { animation: google.maps.Animation.DROP },
        info: "Fire department" + '<br/>' + "Number of available vehicles: 6"
      },
      {
        position: new google.maps.LatLng(44.805503, 20.48),
        title: "Marker 2",
        label: { text: "E", color: 'brown' },
        options: { animation: google.maps.Animation.BOUNCE },
        info: "Event: Fire inside apartment building" + '<br/>' + "Number of people: 3+" + '<br/>' + "Floors: 3-5"
      },
      {
        position: new google.maps.LatLng(44.803758, 20.467646),
        title: "Marker 3",
        label: { text: "E", color: 'blue' },
        options: { animation: google.maps.Animation.BOUNCE },
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
