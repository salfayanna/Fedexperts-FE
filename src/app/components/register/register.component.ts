import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/RegisterService/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  register(username, email, password) {
    this.registerService.register(username, email, password).subscribe(
      data => {
        this.router.navigateByUrl('ip/8080/');
      })
  }
}
