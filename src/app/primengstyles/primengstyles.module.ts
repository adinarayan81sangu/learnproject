import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import {ToastModule} from 'primeng/toast';
import { RippleModule } from "primeng/ripple";
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from "primeng/panel";
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    RippleModule,
    SidebarModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule
  ],
  exports: [
    CommonModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    RippleModule,
    SidebarModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule
  ]
})
export class PrimengstylesModule { }
