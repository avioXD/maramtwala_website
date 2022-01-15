import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { ToastrModule } from 'ngx-toastr';
import {ImageModule} from 'primeng/image';
import {TabViewModule} from 'primeng/tabview';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {CaptchaModule} from 'primeng/captcha';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import {StepsModule} from 'primeng/steps';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';



const PrimeNgComponent = [
           CalendarModule,
           ColorPickerModule,
           InputNumberModule,
           InputTextModule,
           AvatarModule,
           DropdownModule,
           CardModule,
           DialogModule,
           ToastModule,
           RippleModule,
           ToastrModule.forRoot(),
           ImageModule,
           TabViewModule,
           BlockUIModule,
           PanelModule,
           InputTextModule,
           CaptchaModule,
           InputTextareaModule,
           PasswordModule,
           StepsModule,
           OverlayPanelModule,
           SidebarModule

          ]

@NgModule({
   
  imports: [PrimeNgComponent],
  exports: [PrimeNgComponent]
})
export class PrimeNGModule { }
