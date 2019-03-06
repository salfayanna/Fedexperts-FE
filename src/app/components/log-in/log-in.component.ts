import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/Login Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login(email, password) {
    this.loginService.login(email, password).subscribe(
      data => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('role', data['role']);
        this.router.navigateByUrl('ip/8080/menu');
      }
    )
  }

}
