import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/Login Service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  randomExcuse;
  token = localStorage.getItem('token')

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  excuse(token){
    this.service.excuse(token).subscribe(
      data => 
      this.randomExcuse = data['excuse']
      )
      console.log(this.randomExcuse);
  }
}
