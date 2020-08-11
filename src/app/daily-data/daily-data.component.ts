import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ActivatedRoute,Router } from '@angular/router';
import {SociopoolService} from './../sociopool.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-daily-data',
  templateUrl: './daily-data.component.html',
  styleUrls: ['./daily-data.component.css']
})
export class DailyDataComponent implements OnInit {

  public distance;date;time;uniqueId

  constructor(private _router:ActivatedRoute,private router:Router, private serv:SociopoolService,public toastr: ToastrManager) { }

  ngOnInit(): void {
  }

  public saveDailyData(){
    let obj={
      uniqueId:this.uniqueId,
      distance:this.distance,
      date:this.date,
      time:this.time
    }
    let data=JSON.stringify(obj)
    this.serv.saveDailyData(data).subscribe(
      data=>{
        if(data["status"]==200){
          this.toastr.successToastr('Data Entered Successfully');  
          this.router.navigate(['/home'])
          }
        else{
          this.toastr.errorToastr('Some Error Occured');  
        }
      }
    )
  }

}
