import { Pipe, PipeTransform } from '@angular/core';
import { defaultValidatorMessages } from '@psycho/core';
@Pipe({
  name: 'controlErrors'
})
export class ControlErrorsPipe implements PipeTransform {

  transform(controlErrors: any): any[] {
    const errors = [];
    if (controlErrors) {

      const errorsKeys = Object.keys(controlErrors);

      for (const key of errorsKeys) {
        const controlError = controlErrors[key];
        if (!controlError.message) {
          controlError.message = defaultValidatorMessages[key];
        }

        if (controlError.param) {

        }

        errors.push({ key, ...controlError });
      }
    }

    return errors;
  }
}
