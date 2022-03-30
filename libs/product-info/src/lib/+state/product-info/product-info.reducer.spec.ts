// import { Action } from '@ngrx/store';

// import * as ProductInfoActions from './product-info.actions';
// import { Product } from './product-info.models';
// import { State, initialState, reducer } from './product-info.reducer';

// describe('ProductInfo Reducer', () => {
//   const createProduct = (
//     id: string,
//     name = ''
//   ): Product => ({
//     id,
//     name: name || `name-${id}`,
//   });

//   describe('valid ProductInfo actions', () => {
//     it('loadProductInfoSuccess should return the list of known ProductInfo', () => {
//       const productInfo = [
//         createProduct('PRODUCT-AAA'),
//         createProduct('PRODUCT-zzz'),
//       ];
//       const action = ProductInfoActions.loadProductInfoSuccess({ productInfo });

//       const result: State = reducer(initialState, action);

//       expect(result.loaded).toBe(true);
//       expect(result.ids.length).toBe(2);
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as Action;

//       const result = reducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
