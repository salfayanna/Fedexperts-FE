import { Component, OnInit } from '@angular/core';
import { GetPostandCommentService } from '../../services/getPostsandComments Service/get-postand-comment.service';
import { Post } from '../../services/getPostsandComments Service/postInterface';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  subject: string = 'math';
  posts: Post[] = [];

  constructor(private srevice: GetPostandCommentService) { }

  ngOnInit() {
this.getposts()
  }

  getposts(){
this.srevice.getPosts(this.subject).subscribe(data => this.posts = data)
  }
}
