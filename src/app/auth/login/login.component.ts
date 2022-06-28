import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private autService: AuthService,
    private router: Router,
  ) { }

  get email() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  

  async login() {
    const user = await this.autService.login(this.credentials.value);

    if (user) {
      this.router.navigateByUrl('tabs', { replaceUrl: true });
    } else {
      this.showAlert('O login falhou', 'Por favor, tente novamente!');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present()
  }

}
