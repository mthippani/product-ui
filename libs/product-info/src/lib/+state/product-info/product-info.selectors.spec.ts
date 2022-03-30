// import { Product } from './product-info.models';
// import {
//   productInfoAdapter,
//   ProductInfoPartialState,
//   initialState,
// } from './product-info.reducer';
// import * as ProductInfoSelectors from './product-info.selectors';

// describe('ProductInfo Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getProductInfoId = (it: Product) => it.id;
//   const createProduct = (id: string, name = '') =>
//     ({
//       id,
//       name: name || `name-${id}`,
//     } as Product);

//   let state: ProductInfoPartialState;

//   beforeEach(() => {
//     state = {
//       productInfo: productInfoAdapter.setAll(
//         [
//           createProduct('PRODUCT-AAA'),
//           createProduct('PRODUCT-BBB'),
//           createProduct('PRODUCT-CCC'),
//         ],
//         {
//           ...initialState,
//           selectedId: 'PRODUCT-BBB',
//           error: ERROR_MSG,
//           loaded: true,
//         }
//       ),
//     };
//   });

//   describe('ProductInfo Selectors', () => {
//     it('getAllProductInfo() should return the list of ProductInfo', () => {
//       const results = ProductInfoSelectors.getAllProductInfo(state);
//       const selId = getProductInfoId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelected() should return the selected Entity', () => {
//       const result = ProductInfoSelectors.getSelected(
//         state
//       ) as Product;
//       const selId = getProductInfoId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getProductInfoLoaded() should return the current "loaded" status', () => {
//       const result = ProductInfoSelectors.getProductInfoLoaded(state);

//       expect(result).toBe(true);
//     });

//     it('getProductInfoError() should return the current "error" state', () => {
//       const result = ProductInfoSelectors.getProductInfoError(state);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
