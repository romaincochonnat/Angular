import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers: [DataService],
})
export class EInfoComponent {


  infoReceived1:string[]=[];
  infoReceived2:string[]=[];
  infoReceived3:string[]=[];

  getInfoFromService1(){
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2 = this.dservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3 = this.dservice.getInfo3()
  }

  updateInfo(frm:any){
    this.dservice.addInfo(frm.value.location)
  }

constructor(private dservice: DataService){

}


}
