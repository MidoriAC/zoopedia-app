import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '@core/interfaces';

@Pipe({
  name: 'animalImageProfile',
  standalone: true,
})
export class AnimalImageProfilePipe implements PipeTransform {
  transform(animal: Animal): string {
    if (!animal.id && !animal.alt_img) return 'assets/no-image.jpg';

    if (animal.alt_img) return animal.alt_img;

    return `assets/animalsProfile/${animal.id}.png`;
  }
}
