import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/Login Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-randomgenerator',
  templateUrl: './randomgenerator.component.html',
  styleUrls: ['./randomgenerator.component.scss']
})
export class RandomgeneratorComponent implements OnInit {
  randomExcuse;
  token = localStorage.getItem('token')
  constructor(private service: LoginService,
    private router: Router) { }

  ngOnInit() {
  }
  excuse(token) {
    this.service.excuse(token).subscribe(
      data => {
        this.randomExcuse = data['excuse'],
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/randomgenerator']);
      })
    console.log(this.randomExcuse);
  }
}
