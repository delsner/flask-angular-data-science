import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from "./main-layout.types";

@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {
    @Input()
    public menuItems: NavigationItem[] = [];

    @Input()
    public hasSideNav: boolean = false;

    @Input()
    public title: string = '';

    @Input()
    public logoUrl: string = '';

    @Input()
    public hasContentPadding: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }
}
