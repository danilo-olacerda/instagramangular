import { Component, OnInit } from '@angular/core';

const info = [
{user: "user1", image: "../../assets/images/9gag.svg"},
{user: "user2", image: "../../assets/images/meowed.svg"}, 
{user: "user3", image:"../../assets/images/barked.svg"}, 
{user: "user4", image:"../../assets/images/nathanwpylestrangeplanet.svg"}, 
{user: "user5", image:"../../assets/images/wawawicomics.svg"}, 
{user: "user6", image:"../../assets/images/respondeai.svg"}, 
{user: "user7", image:"../../assets/images/filomoderna.svg"}, 
{user: "user8", image:"../../assets/images/memeriagourmet.svg"}];

const postInfo = [
{user:"meowed", userImage:"../../assets/images/meowed.svg", image:"../../assets/images/gato-telefone.svg", likedImage:"../../assets/images/respondeai.svg", likedName:"respondeai", likedNumber:"101.523"}]

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
