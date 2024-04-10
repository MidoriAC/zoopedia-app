import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsService } from '@core/services';
import { material } from '@material';
import { SpinnerComponent } from '@shared/components/spinner.component';
import { Subscription } from 'rxjs';
import { AnimalImagePipe } from './pipes/animal-image.pipe';
import { AnimalImageProfilePipe } from './pipes/animal-image-profile.pipe';

@Component({
  selector: 'app-animal-page',
  standalone: true,
  imports: [
    SpinnerComponent,
    material,
    AnimalImagePipe,
    AnimalImageProfilePipe,
  ],
  template: `
    @if (animalState.isLoadingAnimal) {
    <progress-spinner />
    } @else {
    <div class="grid">
      <mat-card class="col-12 sm:col-6 imageStyle" id="imageStyle">
        <mat-card-header>
          <mat-card-title>{{ animalState.animal!.name }}</mat-card-title>
          <mat-card-subtitle>{{
            animalState.animal!.scientific_name
          }}</mat-card-subtitle>
        </mat-card-header>
        <img
          class="cardStyle"
          mat-card-image
          [src]="animalState.animal! | animalImage"
          [alt]="animalState.animal!.name"
        />
      </mat-card>
      <mat-card class="col-12 sm:col-6">
        <mat-card-header>
          <mat-card-title>Información</mat-card-title>
          <mat-card-subtitle>{{ animalState.animal!.name }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item>{{ animalState.animal!.category }}</mat-list-item>
            <mat-list-item>{{
              animalState.animal!.conservation_status
            }}</mat-list-item>
            <mat-list-item>{{ animalState.animal!.region }}</mat-list-item>
          </mat-list>
          <p>{{ animalState.animal!.description }}</p>

          <button mat-button color="warn" (click)="goBack()">Regresar</button>
        </mat-card-content>
      </mat-card>
    </div>
    }
  `,
  styles: `
    .cardStyle{
      width: 50%;
    }
    .imageStyle{
        align-items: center;
        justify-content: center;
    }
   
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalPageComponent {
  #animalsService = inject(AnimalsService);
  #router = inject(Router);

  id = input.required<string>();

  get animalState() {
    return this.#animalsService.animalState();
  }

  ngOnInit(): void {
    this.#getAnimal();
  }

  goBack(): void {
    this.#router.navigateByUrl('/dashboard/list');
  }

  #getAnimal(): Subscription {
    return this.#animalsService.getAnimalById(this.id());
  }
}
