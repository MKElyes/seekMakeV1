import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormBuilder, FormGroup , Validators } from "@angular/forms";
import { Router } from '@angular/router';




@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  fileMetaData={
    name : null,
    size : 0,
  }
  fileUrl;
  uploadedFilePath:string;
  fileName;
  file;
  obj;
  userFileName:string;
  fileObject: any;

   stepper: Stepper;

   firstFormGroup: FormGroup;
  //  secondFormGroup: FormGroup;
  //  thirdFormGroup: FormGroup;
  //  form: FormGroup;
  //  progress: number = 0;

  constructor(private _formBuilder: FormBuilder , private router: Router) { }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true,
      
    })
    this.firstFormGroup = this._formBuilder.group({
      technique: ['', Validators.required]
    });
  }
  next() {
    if (this.firstFormGroup.valid){
    this.stepper.next();
  }
  console.log(this.firstFormGroup.value);
  
  }
  back(){
    this.stepper.previous();
  }
  public onFileChange(event) {
    const reader = new FileReader();
  
    if (event.target.files && event.target.files.length) {
      this.fileMetaData.name=event.target.files[0].name;
      this.fileMetaData.size=event.target.files[0].size/1000000;
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
          this.file=reader.result
          var formdata = new FormData();
          formdata.append('file',file,this.fileName);
          console.log(formdata.getAll('file'));
         
      };    
    }
  } 

}
