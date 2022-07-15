import { Component, OnInit } from '@angular/core';

const recomendations = [{user: "user", image: "https://randomuser.me/api/portraits/men/37.jpg"}]

@Component({
  selector: 'ig-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  info = recomendations;

  constructor() { }

  ngOnInit(): void {
  }

}
