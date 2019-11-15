import { Component, OnInit } from '@angular/core';

import { ThemingService } from '@app/core/services/theming.service';

@Component({
    selector: 'app-account-card',
    templateUrl: './account-card.component.html',
    styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {
    currentTheme: string;
    name: any;

    constructor(private theming: ThemingService) {
       this.name = localStorage.getItem('name');
       console.log(this.name)
     }

    ngOnInit() {
        this.currentTheme = this.theming.get();
    }

    public changeTheme(themeName: string): void {
        this.currentTheme = themeName;
        this.theming.set(themeName);
    }
}
