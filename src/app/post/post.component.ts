import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ig-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() user: any
  @Input() image: any
  @Input() userImage: any
  @Input() likedImage: any
  @Input() likedNumber: any
  @Input() likedName: any

  constructor() { }

  ngOnInit(): void {
  }

}
