import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCT_INFO_FEATURE_KEY,
  State,
  productInfoAdapter,
} from './product-info.reducer';

// Lookup the 'ProductInfo' feature state managed by NgRx
export const getProductInfoState = createFeatureSelector<State>(
  PRODUCT_INFO_FEATURE_KEY
);

const { selectAll, selectEntities } = productInfoAdapter.getSelectors();

export const getProductInfoLoaded = createSelector(
  getProductInfoState,
  (state: State) => state.loaded
);

export const getProductInfoError = createSelector(
  getProductInfoState,
  (state: State) => state.error
);

export const getAllProductInfo = createSelector(
  getProductInfoState,
  (state: State) => selectAll(state)
);

export const getProductInfoEntities = createSelector(
  getProductInfoState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProductInfoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getProductInfoEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
