import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  constructor(private http: HttpClient) {}

  data: any

  getData(){
    return this.http.get("https://api.publicapis.org/entries").subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }

  ngOnInit() {
    this.getData()
  }

}
