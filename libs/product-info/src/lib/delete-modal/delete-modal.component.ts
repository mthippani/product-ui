import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { timestamp } from 'rxjs';
import {
  deleteProduct,
  loadAllProducts,
} from '../+state/product-info/product-info.actions';

@Component({
  selector: 'product-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  id!: number;
  constructor(
    private store: Store,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
  }

  onDelete(id: number) {
    this.store.dispatch(deleteProduct({ id }));
    this.matDialog.closeAll();
  }
}
