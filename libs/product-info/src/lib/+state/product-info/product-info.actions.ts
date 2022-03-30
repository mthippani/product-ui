import { createAction, props } from '@ngrx/store';
import { Product } from './product-info.models';

export const loadAllProducts = createAction(
  '[ProductInfo Page] loading all products'
);

export const loadProductInfoSuccess = createAction(
  '[ProductInfo/API] Load ProductInfo Success',
  props<{ productInfo: Product[] }>()
);

export const loadProductInfoFailure = createAction(
  '[ProductInfo/API] Load ProductInfo Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[ProductInfo] Add Product',
  props<{ product: Product }>()
);

export const addProductInfoSuccess = createAction(
  '[ProductInfo/API] Add ProductInfo Success',
  props<{ product: Product }>()
);

export const addProductInfoFailure = createAction(
  '[ProductInfo/API] Add ProductInfo Failure',
  props<{ error: any }>()
);

export const updateProduct = createAction(
  '[ProductInfo] Update Product',
  props<{ id: number; product: Product }>()
);

export const updateProductSuccess = createAction(
  '[ProductInfo/API] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[ProductInfo/API] Update Product Failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[ProductInfo] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[ProductInfo/API] Delete Product Success',
  props<{ product: Product }>()
);

export const deleteProductFailure = createAction(
  '[ProductInfo/API] Delete Product Failure',
  props<{ error: any }>()
);

export const loadProduct = createAction(
  '[ProductInfo] Load Product',
  props<{ id: number }>()
);

export const loadProductSuccess = createAction(
  '[ProductInfo/API] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[ProductInfo/API] Load Product Failure',
  props<{ error: any }>()
);
