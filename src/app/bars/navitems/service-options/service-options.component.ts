import { Component, OnInit } from '@angular/core';
import { UserendService } from 'src/app/service/userend.service';
import {Catagory} from 'src/app/model/structure.model'
import { MegaMenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { setMicroserviceCatagory } from 'src/app/store/Shared/shared.action';
import { MicroserviceCatState } from 'src/app/store/Shared/shared.state';

interface  Sub_model{
  label: string,
  code: string
}
@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.scss']
})
export class ServiceOptionsComponent implements OnInit {

  constructor(private userendService: UserendService,private store: Store) { }
  items: MegaMenuItem[];
  catagroyStructure: Catagory[];
  showMenu: boolean;
  ngOnInit(): void {
      this.userendService.getMainCatagory().subscribe((response: Catagory[]) => {
        this.catagroyStructure = response;
        //console.log()
      },(err)=>{
        //console.log(err)
      })
  }
  onSubSelect(item: Catagory){
     
    this.store.dispatch(setMicroserviceCatagory({ Microservice: item}))
  }

}
