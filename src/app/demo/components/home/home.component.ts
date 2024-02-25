import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<builder-component
    *ngIf="!noBuilderPageForUrl"
    model="page"
    (load)="noBuilderPageForUrl = $event ? false : true"
    (error)="noBuilderPageForUrl = true"
  >
    <!-- Default content inside the tag shows while the builder content is fetching -->
    <div class="spinner"></div>
  </builder-component>
  <app-page-not-found *ngIf="noBuilderPageForUrl"> </app-page-not-found>`,
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { 
    noBuilderPageForUrl: boolean = false;
}
