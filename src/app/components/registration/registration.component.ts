import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { LoggerService } from '@app/core/services/logger.service';

import { FormControlHelper } from '@app/core/helpers/index';
import { registrationValidation } from '@app/models/form-validations/index';
import { UsersService } from '@app/core/services/users.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    // Properties
    public registrationForm: FormGroup;
    public registrationValidationModel: any;
    public waiting: boolean;
    public hidePassword: boolean;

    constructor(
        private router: Router,
        private logger: LoggerService,
        private userService: UsersService
    ) {
        this.registrationValidationModel = registrationValidation;
        this.hidePassword = true;
    }

    ngOnInit() {
        const formGroupObj = FormControlHelper.generateFormControls(this.registrationValidationModel);
        if (formGroupObj) {
            this.registrationForm = new FormGroup(formGroupObj);
        } else {
            this.logger.error(new Error('Error generating the form modal & validations'));
        }

    }

    public onSubmit(value) {

        if (this.registrationForm.valid) {
            this.waiting = true;
            const data = {
                email: value.username,
                password: value.password,
                name: value.name
            };
            this.userService
                .register(data)
                .subscribe(
                    res => this.registerSuccess(res),
                    error => {
                        console.log("Error In Register")
                        this.waiting = false;
                    }
                );

        }
    }

    registerSuccess(res) {

        if (res && res.message && (res.message == 'user registered sucessfully')) {
            this.waiting = false;
            this.router.navigateByUrl('data-tables/complete-table');
        }

    }
}
