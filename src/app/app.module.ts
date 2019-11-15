import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App modules
import { SharedModule } from '@app/shared/shared.module';

// App component
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
// Spinner
import { SpinnerComponent } from '@app/shared/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersService } from './core/services/users.service';

@NgModule({
	declarations: [
		AppComponent,
		SpinnerComponent,
		LoginComponent,
		PasswordRecoveryComponent,
		RegistrationComponent
	],
	imports: [
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		// Routing
		AppRoutingModule,
		// App modules
		SharedModule,
	],
	providers: [UsersService],
	bootstrap: [AppComponent]
})
export class AppModule { }
