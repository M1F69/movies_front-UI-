import {Component, inject} from '@angular/core';
import {FormElementComponent} from "../../common/form-element/form-element.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TypeMoveEntity} from "../../Entities/entity";
import {DialogRef} from "../../common/dialog/src";
import {Router, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../app.service";

const omitNil = (target: any): any =>
  Object.fromEntries(
    Object.entries(target).filter(([_, v]) => v != null || v !== undefined)
  );

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    FormElementComponent,
    ReactiveFormsModule,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: '../../style/ui/button.scss',
  host: {
    class: '',
  },
})
export class LoginFormComponent {
  protected readonly dialogRef = inject(DialogRef);
  protected register = false
  protected readonly http = inject(HttpClient);
  protected readonly appService = inject(AppService);
  protected readonly router = inject(Router);



  public user={
  name: 'user',
  pass: '123'
}

  protected formGroupLogin = new FormGroup({
    name: new FormControl<string | null>(null,[Validators.required]),
    pass: new FormControl<string | null>(null,[Validators.required]),
  })


  protected formGroupRegister = new FormGroup({
    NickName : new FormControl<string | null>(null,[Validators.required]),
    Mail : new FormControl<string | null>(null,[Validators.required]),
    FullName : new FormControl<string | null>(null,[Validators.required]),
    Password : new FormControl<string | null>(null,[Validators.required]),
  })

  public handleCancelClick() {
    this.router.navigate(['home'])
    this.dialogRef.close(true);
  }

  handleRegister() {
    this.register=true
  }

  createUser() {
      this.formGroupRegister.markAllAsTouched();

      const XXX = omitNil(
        this.formGroupRegister.getRawValue()
      );

      const ZZZ = new FormData();
      ZZZ.append("NickName ", XXX['NickName'].toString())
      ZZZ.append("Mail ", XXX['Mail'].toString())
      ZZZ.append("FullName ", XXX['FullName'].toString())
      ZZZ.append("Password ", XXX['Password'].toString())

      this.http.post("/api/Users/", ZZZ).subscribe((x) => {
        // respone
        //this.register=false
        ;})
    this.register=false

  }
  }

