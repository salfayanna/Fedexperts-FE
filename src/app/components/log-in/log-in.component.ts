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

  login(username, password) {
    this.loginService.login(username, password).subscribe(
      data => {
        console.log(data);
        console.log(data['token']);
        localStorage.setItem('token', data['token']);
        localStorage.setItem('role', data['role']);
        this.router.navigate(['/menu']);
      }
    )
  }
}
