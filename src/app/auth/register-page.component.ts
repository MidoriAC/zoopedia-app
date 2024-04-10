import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { material } from '@material';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [material, RouterLink],
  template: `
    <div class="flex flex-column">
      <span class="text-lg mb-4">Registro</span>
      <mat-form-field>
        <mat-label>Usuario</mat-label>
        <input type="text" matInput placeholder="Nombre de usuario" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Nombre</mat-label>
        <input type="text" matInput placeholder="Nombres" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Contraseña</mat-label>
        <input type="password" matInput placeholder="Contraseña" />
      </mat-form-field>

      <button mat-button mat-flat-button color="primary">
        <mat-icon matSuffix>save</mat-icon>Crear Cuenta
      </button>

      <div class="flex justify-content-end mt-5">
        <a routerLink="/auth/login">¿Ya tienes cuenta?</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class RegisterPageComponent {}
