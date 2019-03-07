import { Component, OnInit } from '@angular/core';
import {  GetPostandCommentService } from '../../services/getPostsandComments Service/get-postand-comment.service';
import { Post } from '../../services/getPostsandComments Service/postInterface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private service: GetPostandCommentService) { }

  subject: string = 'math';
  posts: Post[] = [];


  ngOnInit() {
    this.getpostsId(3)
      }
    
      getpostsId(id){
    this.service.getPostsId(id).subscribe(data => 
      this.posts = data['posts'])
      }

}
