import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProductInfo from './+state/product-info/product-info.reducer';
import { ProductInfoEffects } from './+state/product-info/product-info.effects';
@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromProductInfo.PRODUCT_INFO_FEATURE_KEY,
      fromProductInfo.reducer
    ),
    EffectsModule.forFeature([ProductInfoEffects]),
  ],
  exports: [TableComponent],

  declarations: [
    TableComponent,
    AddModalComponent,
    EditModalComponent,
    DeleteModalComponent,
  ],
})
export class ProductInfoModule {}
