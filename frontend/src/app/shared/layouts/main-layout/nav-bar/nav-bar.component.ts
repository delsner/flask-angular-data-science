import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from "../main-layout.types";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input()
    public menuItems: NavigationItem[] = [];

    @Input()
    public hasSideNav: boolean = false;

    @Input()
    public title: string = '';

    @Input()
    public logoUrl: string = '';

    constructor() {
    }

    ngOnInit() {
    }

}
