import { Component, OnInit } from '@angular/core';
import { GetPostandCommentService } from '../../services/getPostsandComments Service/get-postand-comment.service';
import { Post } from '../../services/getPostsandComments Service/postInterface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  subject: string = 'math';
  posts: Post[] = [];

  constructor(private service: GetPostandCommentService) { }

  ngOnInit() {
    this.getposts()
  }

  getposts(){
    this.service.getPosts(this.subject).subscribe(data => 
      this.posts = data['posts'])
      }
}
