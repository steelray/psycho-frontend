import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Component({
  selector: 'psycho-psychologist-info',
  templateUrl: './psychologist-info.component.html',
  styleUrls: ['./psychologist-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistInfoComponent {
  @Input() psychologist!: IPsychologist;
  educationExpanded = false;
  descriptionExpanded = false;

  onToggle(e: Event, blockName: 'education' | 'description'): void {
    e.preventDefault();
    if (blockName === 'education') {
      this.educationExpanded = !this.educationExpanded;
    } else {
      this.descriptionExpanded = !this.descriptionExpanded;
    }
  }
}
