import {Component, inject} from '@angular/core';
import {FormElementComponent} from "../../common/form-element/form-element.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogRef} from "../../common/dialog/src";

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [
    FormElementComponent,
    ReactiveFormsModule
  ],
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css', "../../style/ui/button.scss"]
})
export class NotificationFormComponent {
  protected readonly dialogRef = inject(DialogRef);


  public handleCancelClick() {
    this.dialogRef.close('Cancel');
  }

  handleConfirmClick() {
    this.dialogRef.close('Confirm');
  }
}
