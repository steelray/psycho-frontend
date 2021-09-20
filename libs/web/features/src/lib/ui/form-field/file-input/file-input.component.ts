import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { sizeInMb } from '@psycho/utils';
import { BaseFormFieldComponent } from '@psycho/web/core';

@Component({
  selector: 'pb-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputComponent extends BaseFormFieldComponent implements OnInit {
  @Input() uploadBtnText!: string;
  @Input() allowedTypes!: string[];
  @Input() maxFileSize = 100;
  @ViewChild('fileInput') fileInput!: ElementRef;
  file!: File | null;
  fileName: string | undefined = '';

  ngOnInit(): void {
    if (this.control.value) {
      this.fileName = this.control.value?.name;
    }
  }

  onFileChange(event: InputEvent): void {

    const target = event.target as any;

    this.file = target.files.length ? target.files[0] : null;

    if (this.allowedTypes && this.file) {

      this.allowedTypes = this.allowedTypes.map(type => type.toLowerCase());
      const fileType = this.file.type.split('/')[1].toLowerCase();

      if (!this.allowedTypes.includes(fileType)) {
        this.control.setErrors({
          fileTypeError: {
            message: `Допустимые форматы: ${this.allowedTypes}`
          }
        });
      } else if ((sizeInMb(this.file.size) > this.maxFileSize)) {
        this.control.setErrors({
          maxFileSize: {
            message: `Максимально допустимый размер файла: ${this.maxFileSize} мб.`
          }
        });
      } else {
        this.control.setErrors(null);
      }
    }
    this.fileName = this.file?.name;

    if (!this.control.errors) {
      this.control.patchValue(this.file);
    }
  }

  removeFile(): void {
    this.control.setValue('');
    this.file = null;
    this.fileName = '';
  }

  get accept(): string {
    return this.allowedTypes?.map(type => `.${type}`).join(',');
  }
}
