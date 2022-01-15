import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getRegisterState } from 'src/app/store/Shared/shared.selector';
import { setRegitrationStepsAction } from 'src/app/store/Shared/shared.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  steps: number = 1

  constructor(private route: Router, private store: Store<AppState>) { }
  
  ngOnInit(): void {
     this.store.select(getRegisterState).subscribe((v)=>{
       this.steps = v
     })
  }
  nextPage(): void{
    this.steps++;
    this.store.dispatch(setRegitrationStepsAction({step: this.steps}))
  }
  prevPage(): void{
    this.steps--;
    this.store.dispatch(setRegitrationStepsAction({step: this.steps}))
  }
   
  
}
