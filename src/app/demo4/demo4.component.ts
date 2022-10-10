import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { YService } from '../y.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  constructor(private YService:YService ) { }
  users:any;
  ngOnInit(): void {
 this.YService.getalluser().subscribe((data)=>{
  this.users = data;
  console.log(this.users);

 });

  }

}
