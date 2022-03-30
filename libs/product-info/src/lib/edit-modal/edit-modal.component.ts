import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  loadAllProducts,
  loadProduct,
  updateProduct,
} from '../+state/product-info/product-info.actions';
import { Product } from '../+state/product-info/product-info.models';
import {
  getSelected,
  getSelectedId,
} from '../+state/product-info/product-info.selectors';

@Component({
  selector: 'product-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  id!: number;
  productForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.data.id;
    this.store.dispatch(loadProduct({ id: this.id }));
  }

  ngOnInit(): void {
    this.store.select(getSelected).subscribe((data) => {
      this.productForm.patchValue(data as Product, { emitEvent: true });
    });
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  update(product: Product) {
    this.store.dispatch(updateProduct({ id: this.id, product }));
    this.matDialog.closeAll();
    this.store.dispatch(loadAllProducts());
  }
}
