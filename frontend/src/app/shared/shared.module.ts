import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdSidenavModule, MdToolbarModule,
    MdTooltipModule, MdProgressBarModule, MdSlideToggleModule, MdDialogModule, MdMenuModule, MdSliderModule,
    MdTabsModule, MdCheckboxModule, MdRadioModule, MdChipsModule, MdDatepickerModule, MdNativeDateModule, MdTableModule,
    MdCoreModule, MdSortModule, MdPaginatorModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MainLayoutModule} from "./layouts/main-layout/main-layout.module";

@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        MdTooltipModule,
        MdButtonModule,
        MdCardModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdProgressBarModule,
        MdSlideToggleModule,
        MdMenuModule,
        MdSliderModule,
        MdTabsModule,
        MdCheckboxModule,
        MdRadioModule,
        MdChipsModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdTableModule,
        CdkTableModule,
        MdCoreModule,
        MdSortModule,
        MdPaginatorModule,
        // Chart module
        NgxChartsModule,
        MainLayoutModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        MdTooltipModule,
        MdButtonModule,
        MdCardModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdProgressBarModule,
        MdSlideToggleModule,
        MdMenuModule,
        MdSliderModule,
        MdSliderModule,
        MdTabsModule,
        MdCheckboxModule,
        MdRadioModule,
        MdChipsModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdTableModule,
        CdkTableModule,
        MdCoreModule,
        MdSortModule,
        // Chart module
        NgxChartsModule,
        MainLayoutModule
    ],
    declarations: [],
    providers: [
    ],
    entryComponents: []
})
export class SharedModule {
}
