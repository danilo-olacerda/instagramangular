import { Component, OnInit } from '@angular/core';

const info = [{user: "user", image: "image"}];
const postInfo = [{user: "user", image: "../../assets/images/gato-telefone.svg"}]

@Component({
  selector: 'ig-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data = info;
  postsData = postInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
