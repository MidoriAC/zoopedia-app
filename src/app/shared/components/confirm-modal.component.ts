import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Animal } from '@core/interfaces';
import { material } from '@material';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [material],
  template: `
    <h1 mat-dialog-title>¿Está seguro?</h1>
    <div mat-dialog-content>
      <p>Este proceso no es reversible, esta a punto de eliminar a ANIMAL</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <span class="spacer"></span>
      <button mat-button color="primary" (click)="onConfirm()" cdkFocusInitial>
        Confirmar
      </button>
    </div>
  `,
  styles: ``,
})
export class ConfirmModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Animal
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
