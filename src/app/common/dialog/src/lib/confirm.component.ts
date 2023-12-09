import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DIALOG_DATA } from './dialog.service';

export type ConfirmOptions = {
  title: string;
  message: string;
}

@Component({
  selector: 'v-dialog-confirm',
  template: `
    <div class='flex flex-col w-[500px] text-xs'>
      <div class='px-5 pt-5'>
        <div
          class='inline-flex leading-8 h-8 min-w-0 text-center whitespace-nowrap align-middle text-[#222] font-semibold'>
          {{ dialogData?.title }}
        </div>
      </div>

      <div class='px-5 py-3  text-[#555] font-semibold'>{{ dialogData?.message }}</div>
      <div class='px-5 pb-3 flex justify-end'>
        <div class='flex items-center space-x-2'>
          <button  (click)='handleCancelClick()'>Отмена</button>
          <button  (click)='handleConfirmClick()'>Подтвердить</button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ConfirmComponent {
  protected readonly dialogRef = inject(DialogRef);
  protected readonly dialogData = inject<ConfirmOptions>(DIALOG_DATA);

  handleCancelClick() {
    this.dialogRef.close('cancel');
  }

  handleConfirmClick() {
    this.dialogRef.close('confirm');
  }
}
