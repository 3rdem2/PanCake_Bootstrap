import { ServiceService } from './../service.service';
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'data-course',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  data;
  attend: number;
  selectedData : Data;



  constructor(private http : HttpClient ) {
    http.get('https://api.zaguru.com/api/Classes/getClasses')
        .subscribe(response=>{
          this.data=response;
        })

   }

   onEdit(data:Data):void{
      this.selectedData=data;

   }

}
