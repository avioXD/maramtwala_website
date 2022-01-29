import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMicroerviceCatagoryState } from 'src/app/store/Shared/shared.selector';
import { setMicroserviceCatagory } from 'src/app/store/Shared/shared.action';
import { MicroserviceCatState, Sub_model } from 'src/app/store/Shared/shared.state';
import { Microservice_init } from 'src/app/store/Shared/shared.state';
import { Catagory } from 'src/app/model/Structure.model';
@Component({
  selector: 'app-sub-catagories',
  templateUrl: './sub-catagories.component.html',
  styleUrls: ['./sub-catagories.component.scss']
})
export class SubCatagoriesComponent implements OnInit {

  constructor(private store: Store) { }
  service: Catagory
   
  display: boolean
  ngOnInit(): void {
    this.store.select(getMicroerviceCatagoryState).subscribe((res : MicroserviceCatState)=>{
      this.service = res.Microservice ;
      //console.log("Shoing Sub catagories", this.service )
      if(this.service.routerLink!=''){
        this.display = true
      }
    })
  }
  hideBar(){
    this.store.dispatch(setMicroserviceCatagory(Microservice_init))
    this.display= false
  }

}
