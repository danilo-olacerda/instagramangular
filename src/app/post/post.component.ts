import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ig-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() user: any
  @Input() image: any

  constructor() { }

  ngOnInit(): void {
  }

}
