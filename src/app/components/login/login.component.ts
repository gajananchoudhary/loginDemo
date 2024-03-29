import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { LoggerService } from '@app/core/services/logger.service';

import { FormControlHelper } from '@app/core/helpers/index';
import { loginValidation } from '@app/models/form-validations/index';
import { UsersService } from '@app/core/services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    // Properties
    public loginForm: FormGroup;
    public loginValidationModel: any;
    public waiting: boolean;
    public hidePassword: boolean;

    constructor(
        private router: Router,
        private logger: LoggerService,
        private userService: UsersService
    ) {
        this.loginValidationModel = loginValidation;
        this.hidePassword = true;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.loginValidationModel);
        if (formGroupObj) {
            this.loginForm = new FormGroup(formGroupObj);
        } else {
            this.logger.error(new Error('Error generating the form modal & validations'));
        }

    }

    public onSubmit(value) {

        if (this.loginForm.valid) {
            this.waiting = true;
            const data = {
                email: value.username,
                password: value.password
            };
            this.userService
                .login(data)
                .subscribe(
                    res => this.loginSuccess(res),
                    error => {
                        console.log("Error In Login")
                        this.waiting = false;
                    }
                );

        }
    }

    loginSuccess(res) {

        if (res && res.message && (res.message = 'successfully authenticated')) {
            this.waiting = false;
            localStorage.setItem('token',res.token)
            localStorage.setItem('name',res.name)
            this.router.navigateByUrl('data-tables/complete-table');
        }

    }

}
