import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogLogoutComponent } from '@app/shared/dialogs/dialog-logout/dialog-logout.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout-button',
    templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent {

    constructor(private dialog: MatDialog, private router: Router) { }

    public openLogoutDialog(): void {
        // Open logout dialog
        const logoutDialog = this.dialog.open(DialogLogoutComponent, {
            width: '300px'
        });

        logoutDialog.afterClosed().subscribe(result => {
            if (result) {
                // User click on logout session button
                console.log('Call a session service to logout');
                localStorage.clear();
                this.router.navigateByUrl('login');
            }
        });

    }
}
