import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lostev';
  ngOnInit() {
    let markers = [
      {
        position: new google.maps.LatLng(44.805503, 20.476134),
        title: "Marker 1",
        label: { text: "E", color: 'green' },
        options: { animation: google.maps.Animation.BOUNCE },
        info: "<b>Event: </b> Heart attack" + '<br/>' + "<b>Age:</b> 65" + "<br/>" + "<b> Gender: </b> Male"
      },
      {
        position: new google.maps.LatLng(44.811516, 20.478889),
        title: "Ambulance Palilula",
        label: { text: "A", color: 'green' },
        options: { animation: google.maps.Animation.DROP },
        info: "<b> Ambulance </b>" + '<br/>' + "  Number of available vehicles: 4" + '<br/>'
      },
      {
        position: new google.maps.LatLng(44.800152, 20.480334),
        title: "Marker 3",
        label: { text: "P", color: 'blue' },
        options: { animation: google.maps.Animation.DROP },
        info: "<b> Police Department </b> " + '<br/>' + "Number of available people: 34"
      },

      {
        position: new google.maps.LatLng(44.811975, 20.487802),
        title: "Fire Department",
        label: { text: "F", color: 'brown' },
        options: { animation: google.maps.Animation.DROP },
        info: "<b> Fire department </b>" + '<br/>' + "Number of available vehicles: 6"
      },
      {
        position: new google.maps.LatLng(44.805503, 20.48),
        title: "Marker 2",
        label: { text: "E", color: 'brown' },
        options: { animation: google.maps.Animation.BOUNCE },
        info: "<b>Event: </b> Fire inside apartment building" + '<br/>' + "<b> Number of people: </b> 3+" + '<br/>' + "<b> Floors: </b> 3-5"
      },
      {
        position: new google.maps.LatLng(44.803758, 20.467646),
        title: "Marker 3",
        label: { text: "E", color: 'blue' },
        options: { animation: google.maps.Animation.BOUNCE },
        info: "<b>Event: </b> Street Riots" + '<br/>' + "<b> Number of people: </b> 500+" + '<br/>' + " <b> Violent: </b> Yes"
      }

    ];

    let users = [
      {
        name: "Uros",
        surname: "Vujosevic",
        jmbg: "123",
        password: "uros123",
        tip: "dispatcher",
      },
      {
        name: "Milijan",
        surname: "Bogdanovic",
        jmbg: "milijan",
        password: "milijan123",
        tip: "user",
      }
    ]

    localStorage.setItem('markers', JSON.stringify(markers));
    localStorage.setItem('users', JSON.stringify(users));


  }
}
