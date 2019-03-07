import { Component, OnInit } from '@angular/core';
import { GetPostandCommentService } from '../../services/getPostsandComments Service/get-postand-comment.service';
import { Post } from '../../services/getPostsandComments Service/postInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  subject: string = 'math';
  posts: Post[] = [];

  constructor(private service: GetPostandCommentService,
    private router: Router) { }

  ngOnInit() {
this.getposts()
  }

  getposts(){
this.service.getPosts(this.subject).subscribe(data => 
  this.posts = data['posts'])
  }

  relocate(){
    this.router.navigate(['/forum/math/post']);
  }
}
