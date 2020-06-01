import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  result : object;

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(){
    this.http.get("http://api.dev.marche.dailyobjects.com/cp",
    {
      headers : new HttpHeaders({'Authorization' : 'Bearer let_me_through_coz_i_got_rights' })
    })
    .subscribe((res:any) =>{
      this.result = res.data.feed
    })
  }

}
