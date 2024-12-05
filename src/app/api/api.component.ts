import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

  userlist : any [] =[];
  newcarobj = {
    customerId: 0,
    customerName: '',
    customerCity: '',
    mobileNo: '',
    email: ''
};

apiCommonUrl : string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/";

constructor(private http:HttpClient){
  this.getuser();
}

getuser(){
  this.http.get(this.apiCommonUrl + "GetCustomers").subscribe((Response:any)=>{
this.userlist = Response.data;
  }
  )
}

onSaveCar() {
  this.http.post(this.apiCommonUrl+"CreateNewCustomer", this.newcarobj)
    .subscribe((res: any) => {
      if (res.result === true) {
        alert("data added Successfully");
        this.getuser();
      } else {
        alert(res.message);
      }
    });
}

onUpdateCar(item: any) {
  this.http.put(this.apiCommonUrl+"UpdateCustomer", this.newcarobj).subscribe((res: any) => {
    if (res.result) {
      alert("data Updated Success");
      this.getuser();
    } else {
      alert(res.message);
    }
  });
}

onDelete(CustomerId: number) {
  // if (!CustomerId) {
  //   alert("Invalid Customer ID");
  //   return; 
  // }
  const isdelete = confirm("Are you sure you want to delete?");
  if ( isdelete == true){
    this.http.delete(this.apiCommonUrl+"DeletCustomerById?id=" +  CustomerId).subscribe((res: any) => {
      if (res.result) {
        alert("data Deleted Success");
        this.getuser();
      } else {
        alert(res.message);
      }
    });
  }
 
}
 
onUpdate(item: any){
  this.newcarobj = item
}


}
