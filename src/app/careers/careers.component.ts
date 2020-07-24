import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from './../api-client.service';
declare var $: any;


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  careers:[];
  config: any;
  successMessage: boolean = false;
  lenghtArea='';
  selectedDate;
  applyJobData: applyJob;
  public userFile:any = File;
  constructor(private router: Router,private apiClientService: ApiClientService) {
    this.applyJobData = new applyJob();
  }

  ngOnInit(): void {
    $(document).ready(function() {
      /*$('#js-date').datepicker({
        autoclose: true
      });*/
    });
    this.apiClientService.getJopOpenings().subscribe((data) => {
      this.careers = data;
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.careers.length
      };
    });
    /*this.careers = new Array<any>();
    this.careers.push(new careers("1","Senior Electricion1","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("2","Senior Electricion2","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("3","Senior Electricion3","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("4","Senior Electricion4","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("5","Senior Electricion5","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("6","Senior Electricion6","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("7","Senior Electricion7","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("8","Senior Electricion8","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("9","Senior Electricion9","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("10","Senior Electricion10","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("11","Senior Electricion11","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("12","Senior Electricion12","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));*/
    
  }

  clickMore(){
    this.router.navigate(['/carreersList']);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


  uploadFile(event){
    const file = event.target.files[0];
    this.userFile = file;
    $('.custom-file-label').html(file.name); 
  }
ModelNot(){
  this.successMessage = false;
}
  applyJob(careerId){
    if(this.applyJobData != null && this.applyJobData.email != null){
      this.applyJobData.careerId = careerId;
      const profile = JSON.stringify(this.applyJobData);
      const formData = new FormData();
      formData.append('profile',profile);
      formData.append('file',this.userFile);

      this.apiClientService.applyJob(formData).subscribe((data) => {
        if(data != null){
          this.applyJobData.name = "";
          this.applyJobData.dateOfbirth = "";
          this.applyJobData.nationality = "";
          this.applyJobData.email = "";
          this.applyJobData.phoneNumber = "";
          this.applyJobData.mobileNumber = "";
          this.applyJobData.describeCurrentJob = "";
          this.applyJobData.expAbroad = "";
          this.applyJobData.expOthers = "";
          this.applyJobData.qualifications = "";
          this.applyJobData.joiningPeriod = "";
          this.applyJobData.currentSalary = "";
          this.applyJobData.expSalary = "";
          this.applyJobData.presentLocation = "";
          this.successMessage = true;
        }
      });
    }
  }

}

export class careers{
  id:any;
  role:string;
  jobSummary:String;
  jobDescription:String;

  /*constructor(id,role,jobSummary){
    this.id = id;
    this.role = role;
    this.jobSummary = jobSummary;
  }*/
}


export class applyJob{
  id:any;
  careerId:any;
  name:String;
  dateOfbirth:any;
  nationality:String;
  email:String;
  phoneNumber:String;
  mobileNumber:String;
  describeCurrentJob:String;
  expAbroad:String;
  expOthers:String;
  qualifications:String;
  joiningPeriod:String;
  currentSalary:String;
  expSalary:String;
  presentLocation:String;
}
