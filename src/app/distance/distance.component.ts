import { Component, OnInit } from '@angular/core';
import { SociopoolService } from '../sociopool.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  public starttime;endtime;uniqueId;speed

  constructor(private serv:SociopoolService,public toastr: ToastrManager,private router:Router) { }

  ngOnInit(): void {
  }

  public distance(){
    let obj={
      uniqueId:this.uniqueId,
      starttime:this.starttime,
      endtime:this.endtime,
      speed:this.speed
    }
    let data=JSON.stringify(obj)
    this.serv.distance(data).subscribe(
      data=>{
        if(data["status"]==200){
          this.toastr.successToastr("The distance covered is "+ data["data"]["distance"]+" meters")
          setTimeout(()=>this.router.navigate(['/home']),2000)
        }
        else if (data["status"]==404){
          this.toastr.errorToastr("Unique Id Does not exist. Please Enter Correct UniqueId")
        }
        else{
          this.toastr.errorToastr("Some Error Occured")
        }
      }
    )
  }
}
