import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductInfoActions from './product-info.actions';
import { Product } from './product-info.models';

export const PRODUCT_INFO_FEATURE_KEY = 'productInfo';

export interface State extends EntityState<Product> {
  selectedId?: string | number; // which ProductInfo record has been selected
  loaded: boolean; // has the ProductInfo list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductInfoPartialState {
  readonly [PRODUCT_INFO_FEATURE_KEY]: State;
}

export const productInfoAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialState: State = productInfoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const productInfoReducer = createReducer(
  initialState,
  on(ProductInfoActions.loadAllProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductInfoActions.loadProductInfoSuccess, (state, { productInfo }) =>
    productInfoAdapter.setAll(productInfo, { ...state, loaded: true })
  ),
  on(ProductInfoActions.loadProductInfoFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProductInfoActions.loadProduct, (state, { id }) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductInfoActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    selectedId: product.id,
    loaded: true,
  })),
  on(ProductInfoActions.loadProductFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productInfoReducer(state, action);
}
