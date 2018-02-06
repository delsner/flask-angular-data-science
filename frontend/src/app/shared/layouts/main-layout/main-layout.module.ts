import {NgModule} from '@angular/core';

import {MainLayoutComponent} from './main-layout.component';
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MdButtonModule, MdIconModule, MdMenuModule, MdToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {SideNavComponent} from "./side-nav/side-nav.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule,
        MdToolbarModule
    ],
    exports: [
        MainLayoutComponent,
        NavBarComponent,
        SideNavComponent],
    declarations: [
        MainLayoutComponent,
        NavBarComponent,
        SideNavComponent
    ],
    providers: [],
})
export class MainLayoutModule {
}
