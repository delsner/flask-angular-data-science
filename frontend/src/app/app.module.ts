// external modules
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from "@angular/router";
import 'hammerjs';

// own modules and components
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {ROUTES} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import {IrisService} from "./pages/home/iris.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        SharedModule
    ],
    providers: [IrisService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
