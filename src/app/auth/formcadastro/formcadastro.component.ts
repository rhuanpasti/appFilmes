import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './formcadastro.component.html',
  styleUrls: ['./formcadastro.component.scss'],
})
export class FormcadastroComponent implements OnInit {

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

  async register() {
    const user = await this.autService.register(this.credentials.value);

    if (user) {
      this.router.navigateByUrl('', { replaceUrl: true });
    } else {
      this.showAlert('O registro falhou', 'Por favor, tente novamente!');
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



