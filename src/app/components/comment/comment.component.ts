import { Component, OnInit } from '@angular/core';
import {  GetPostandCommentService } from '../../services/getPostsandComments Service/get-postand-comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private service: GetPostandCommentService) { }

  ngOnInit() {
  }




  vote(direction: string) {
    const token = localStorage.getItem('token')
    const id: string = direction['parentElement']['parentElement'].id;
    if (direction['alt'] === 'upvote') {
      this.service.votePost(id, 'true', `${token}`).subscribe( // authtokent átírni dinamikusra
        data => {
          if (data['status'] === 200) {
            const currentNumber = parseInt(direction['nextElementSibling'].innerText, 0);
            direction['nextElementSibling'].innerText = currentNumber + 1;
          }
        }
      );
    } else if (direction['alt'] === 'downvote') {
      this.service.votePost(id, 'false', `${token}`).subscribe( // authtokent átírni dinamikusra
        data => {
          if (data['status'] === 200) {
            const currentNumber = parseInt(direction['previousElementSibling'].innerText, 0);
            direction['previousElementSibling'].innerText = currentNumber - 1;
          }
        }
      );
    }
  }
}
