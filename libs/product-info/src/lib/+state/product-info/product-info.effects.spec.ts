import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ProductInfoActions from './product-info.actions';
import { ProductInfoEffects } from './product-info.effects';

describe('ProductInfoEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductInfoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProductInfoEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductInfoEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductInfoActions.loadAllProducts() });

      const expected = hot('-a-|', {
        a: ProductInfoActions.loadProductInfoSuccess({ productInfo: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
