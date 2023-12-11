import {Component, inject} from '@angular/core';
import {FormElementComponent} from "../../common/form-element/form-element.component";

import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TypeMoveEntity} from "../../Entities/entity";
import {DialogRef} from '../../common/dialog/src/lib/dialog-ref';
import {HttpClient} from "@angular/common/http";

const omitNil = (target: any): any =>
  Object.fromEntries(
    Object.entries(target).filter(([_, v]) => v != null || v !== undefined)
  );

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [
    FormElementComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './movie-form.component.html',
  styleUrl: '../../style/button.scss'
})
export class MovieFormComponent {
  protected readonly dialogRef = inject(DialogRef);
  protected readonly http = inject(HttpClient);
  protected  photoRef: File | undefined =  undefined;


  protected formGroup = new FormGroup({
    name: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
    year: new FormControl<number | null>(null),
    type: new FormControl<TypeMoveEntity | null>(null),
    photo: new FormControl<File | null>(null),
  })

  public handleCancelClick() {
    this.dialogRef.close();
  }

  handleConfirmClick() {
    this.formGroup.markAllAsTouched();

    const XXX = omitNil(
      this.formGroup.getRawValue()
    );
    XXX['type'] = Number(XXX['type']);
    const ZZZ = new FormData();
    ZZZ.append("name", XXX['name'].toString())
    ZZZ.append("description", XXX['description'].toString())
    ZZZ.append("year", XXX['year'].toString())
    ZZZ.append("type", XXX['type'].toString())
    this.photoRef&&
    ZZZ.append("files", this.photoRef)
    console.log(XXX)
    this.http.post("/api/Movies/", ZZZ).subscribe((x) => console.log(x))
  }

  func($event: Event) {
   const file = ($event.target as HTMLInputElement).files?.[0];
   this.photoRef = file
  }
}
