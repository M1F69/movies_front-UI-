import {Component, inject, Injector} from '@angular/core';
import {DialogModule, DialogService} from "../dialog/src";
import {DialogRef} from '../../common/dialog/src/lib/dialog-ref';
import {FormElementComponent} from "../form-element/form-element.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgTemplateOutlet} from "@angular/common";
import {TypeMoveEntity} from "../../Entities/entity";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [
    FormElementComponent,
    ReactiveFormsModule,
    NgTemplateOutlet
  ],
  providers: [DialogModule, DialogService],
  templateUrl: './settings-form.component.html',
  styleUrl: '../../style/ui/button.scss',
host: {
    class:''
}
})




export class SettingsFormComponent {
protected readonly dialogRef = inject(DialogRef);
  protected readonly dialogService = inject(DialogService);
  protected readonly appService = inject(AppService);


  protected formGroup = new FormGroup({
    category1: new FormControl<number>(0,[Validators.required]),
    category2: new FormControl<number>(0,[Validators.required]),
    category3: new FormControl<number>(0,[Validators.required]),
    })
  handleCancelClick(){
this.appService.changeCategories( this.formGroup.get('category1')!.getRawValue(), this.formGroup.get('category2')!.getRawValue(), this.formGroup.get('category3')!.getRawValue())
    this.dialogRef.close()
  }
}
