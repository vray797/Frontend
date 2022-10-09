import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(TestComponent)
  testcomponent: TestComponent = new TestComponent;
  title = 'Frontend';
  constructor(private http: HttpClient) {}

  data: any

  getData(){
    return this.http.get("https://api.publicapis.org/entries").subscribe((res) => {
      this.data = res
    })
  }

  ngOnInit() {
    console.log(this.testcomponent)
  }

}
