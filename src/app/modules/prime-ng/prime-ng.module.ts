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
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import {DividerModule} from 'primeng/divider';
import {TimelineModule} from 'primeng/timeline';
import {RatingModule} from 'primeng/rating';
import {CarouselModule} from 'primeng/carousel';
import {CheckboxModule} from 'primeng/checkbox';
import {GalleriaModule} from 'primeng/galleria';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FocusTrapModule} from 'primeng/focustrap';
import {BadgeModule} from 'primeng/badge';
import {TooltipModule} from 'primeng/tooltip';
import {ScrollTopModule} from 'primeng/scrolltop';
import {GMapModule} from 'primeng/gmap';
const PrimeNgComponent = [
           CalendarModule,
           GMapModule,
           ScrollTopModule,
           TooltipModule,
           FocusTrapModule,
           BadgeModule,
           ColorPickerModule,
           InputNumberModule,
           InputTextModule,
           AvatarModule,
           ScrollPanelModule,
           DropdownModule,
           CardModule,
           CheckboxModule,
           DialogModule,
           GalleriaModule,
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
           SidebarModule,
           MenuModule,
           CarouselModule,
           MegaMenuModule,
           DividerModule,
           TimelineModule,
           RatingModule,
           
          ]

@NgModule({
   
  imports: [PrimeNgComponent],
  exports: [PrimeNgComponent]
})
export class PrimeNGModule { }
