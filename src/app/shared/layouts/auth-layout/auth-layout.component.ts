import { Component } from '@angular/core';

@Component({
    selector: 'app-auth-layout',
    templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {
    public currentTheme: string;

    token: any;

    constructor() {
        this.token = localStorage.getItem('token');
     }

}
