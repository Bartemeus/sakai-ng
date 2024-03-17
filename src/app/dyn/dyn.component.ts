import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
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
      <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
      <button type="submit" class="btn btn-default">Submit</button>
  <button type="button" class="btn btn-default" (click)="options.resetModel()">Reset</button>
    </form>
    <!-- <p>{{model|json}}</p> -->
    <div id=div style="white-space: pre-wrap" contenteditable><p #editableContent>{{fields|json}}</p></div>
<button (click)="saveChanges($event)">Сохранить</button>
  `,
  styleUrl: './dyn.component.scss',
})
export class DynComponent {
  @ViewChild('editableContent') editableContent: ElementRef;

  form = new FormGroup({});
  // model = { email: 'email@gmail.com' };
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'nested.story',
      type: 'textarea',
      props: {
        label: 'Some sweet story',
        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: '',
      },
      expressions: {
        focus: 'formState.awesomeIsForced',
        'props.description': ({ options: { formState } }) => {
          if (formState.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }

          return '';
        },
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      props: { label: '' },
      expressions: {
        'props.disabled': 'formState.awesomeIsForced',
        'props.label': ({ options: { formState } }) => {
          if (formState.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        },
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      props: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
      expressions: {
        hide: 'model.awesome',
        'props.placeholder': ({ options: { formState } }) => {
          if (formState.awesomeIsForced) {
            return `Too bad... It really is awesome! Wasn't that cool?`;
          } else {
            return 'Type in here... I dare you';
          }
        },
        'props.disabled': 'formState.awesomeIsForced',
      },
    },
  ];

  saveChanges(event: Event) {
    const content = this.editableContent.nativeElement.innerHTML;
    event.preventDefault();
    this.fields = JSON.parse(content)
    // Здесь вы можете сохранить содержимое
    console.log("Сохранено:", content);
  }
  onSubmit(model) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}