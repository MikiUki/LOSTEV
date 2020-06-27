import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {


  markers: any[];
  empty: boolean;
  done: boolean;
  display_marker: any;

  constructor(private ruter: Router) { }

  ngOnInit(): void {
    this.done = false;
    this.empty = false;
    this.markers = JSON.parse(localStorage.getItem('markers'));

    for (let i = 0; i < 5; i++) {  //LOL what a loop
      this.markers.forEach((marker, index) => {
        console.log(this.markers[index].label.text);
        if (this.markers[index].label.text != 'E') {
          this.markers.splice(index, 1)

        }
      })
    }

  }


  respond(index: number, marker: any) {


    this.display_marker = this.markers[index];

    this.empty = true;
    this.markers.splice(index, 1);
    if (this.markers.length == 0)
      this.done = true;
    let global_markers = JSON.parse(localStorage.getItem('markers'));
    global_markers.forEach((global, index) => {
      if (global.info == marker.info)
        global_markers.splice(index, 1)
    });
    localStorage.setItem('markers', JSON.stringify(global_markers))
  }

  goback() {
    this.ruter.navigate(['/dispatcher']);
  }

}
