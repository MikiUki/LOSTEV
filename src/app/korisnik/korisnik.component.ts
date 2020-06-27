import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  go(type: string) {
    console.log("123");

    localStorage.setItem('type', JSON.stringify(type));


  }
}
