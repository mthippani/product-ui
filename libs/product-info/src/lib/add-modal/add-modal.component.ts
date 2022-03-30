import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addProduct } from '../+state/product-info/product-info.actions';
import { Product } from '../+state/product-info/product-info.models';

@Component({
  selector: 'product-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private matDialog: MatDialog
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get formControls(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  onSubmit(product: Product) {
    this.store.dispatch(addProduct({ product }));
    this.matDialog.closeAll();
  }
}
