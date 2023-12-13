import {Component, inject} from '@angular/core';
import {FormElementComponent} from "../../common/form-element/form-element.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TypeMoveEntity} from "../../Entities/entity";
import {DialogRef} from "../../common/dialog/src";

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    FormElementComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: '../../style/ui/button.scss',
  host: {
    class: '',
  },
})
export class LoginFormComponent {
  protected readonly dialogRef = inject(DialogRef);

public user={
  name: 'user',
  pass: '123'
}

  protected formGroup = new FormGroup({
    name: new FormControl<string | null>(null),
    pass: new FormControl<string | null>(null),
  })



  public handleCancelClick() {
    this.dialogRef.close(true);
  }
}
