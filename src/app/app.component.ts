import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 country = [

  {id:1, name:"India"},

  {id:2, name:"America"},

  {id:3, name:"Japan"},

  {id:4, name:"london"}
 ]
submit(data:any){
  if(data.username == "ankita" && data.password == 12345){
    alert("welcome to the Angular Form")
  }
  else{
    alert("your name and password is invalid")
  }

  console.log(data);


}

  submitin(data:any){
    if(data.password == "ankita"){
      alert("you are correct")
    }
    else{
      alert("your password in incorrect")
    }

    console.log(data);

  }


  allsubmit(data:any){

    console.log(data);


  }

  sub(data:any){
   if(data.username == "Ankita Suryavanshi" && data.password == 987654321){
    alert("welcome to the forms")
   }
   else{
    alert("invalid information")
   }
  }

}
