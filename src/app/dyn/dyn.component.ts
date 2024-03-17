import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json'
})
export class JsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2); // Форматирует JSON с отступами
  }
}

@Component({
  selector: 'app-dyn',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    <p>{{model|json}}</p>
    <div id=div style="white-space: pre-wrap" contenteditable><p #editableContent>{{fields|json}}</p></div>
<button (click)="saveChanges($event)">Сохранить</button>
  `,
    styleUrl: './dyn.component.scss',
})
export class DynComponent {
  @ViewChild('editableContent') editableContent: ElementRef;

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  saveChanges(event: Event) {
    const content = this.editableContent.nativeElement.innerHTML;
    event.preventDefault();
    this.fields=JSON.parse(content)
    // Здесь вы можете сохранить содержимое
    console.log("Сохранено:", content);
  }
  onSubmit(model) {
    console.log(model);
  }
}