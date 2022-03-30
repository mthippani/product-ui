import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import * as ProductInfoActions from './product-info.actions';
import { Product } from './product-info.models';
import * as ProductInfoFeature from './product-info.reducer';
import { ProductInfoService } from './product-info.service';

@Injectable()
export class ProductInfoEffects {
  constructor(private actions$: Actions, private service: ProductInfoService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductInfoActions.loadAllProducts),
      switchMap(() =>
        this.service.findAllProducts().pipe(
          map((products: Product[]) =>
            ProductInfoActions.loadProductInfoSuccess({ productInfo: products })
          ),
          catchError(async (error) =>
            ProductInfoActions.loadProductInfoFailure(error)
          )
        )
      )
    )
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductInfoActions.loadProduct),
      switchMap((action) =>
        this.service.getProduct(action.id).pipe(
          map((product: Product) =>
            ProductInfoActions.loadProductSuccess({ product })
          ),
          catchError(async (error) =>
            ProductInfoActions.loadProductFailure(error)
          )
        )
      )
    )
  );

  saveProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductInfoActions.addProduct),
      switchMap((action) =>
        this.service.createProduct(action.product).pipe(
          map((product: Product) =>
            ProductInfoActions.loadProductSuccess({ product })
          ),
          catchError(async (error) =>
            ProductInfoActions.loadProductFailure(error)
          )
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductInfoActions.updateProduct),
      switchMap((action) =>
        this.service.updateProduct(action.id, action.product).pipe(
          map((product: Product) =>
            ProductInfoActions.updateProductSuccess({ product })
          ),
          catchError(async (error) =>
            ProductInfoActions.updateProductFailure(error)
          )
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductInfoActions.deleteProduct),
      switchMap((action) =>
        this.service.delete(action.id).pipe(
          map((product: Product) =>
            ProductInfoActions.deleteProductSuccess({ product })
          ),
          catchError(async (error) =>
            ProductInfoActions.deleteProductFailure(error)
          )
        )
      )
    )
  );
}
