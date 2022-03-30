import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { fromEvent, Observable } from 'rxjs';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { Product } from '../+state/product-info/product-info.models';
import { select, Store } from '@ngrx/store';
import { getAllProductInfo } from '../+state/product-info/product-info.selectors';
import {
  loadAllProducts,
  loadProduct,
} from '../+state/product-info/product-info.actions';

const ELEMENT_DATA: Product[] = [
  { id: 1, name: 'Hydrogen1', description: 'Product Desc1', price: 1.0 },
  { id: 2, name: 'Hydrogen2', description: 'Product Desc2', price: 2.0 },
];

@Component({
  selector: 'product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'actions',
  ];
  dataSource = new MatTableDataSource([] as Product[]);
  records$!: Observable<Product[]>;
  @ViewChild('filter', { static: true }) filter!: ElementRef;

  constructor(
    private store: Store,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {
    this.store.dispatch(loadAllProducts());
    this.records$ = this.store.pipe(select(getAllProductInfo));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngOnInit(): void {
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddModal() {
    this.dialog.open(AddModalComponent, { width: '30rem' });

    // const dialogRef = this.dialogService.open(AddDialogComponent, {
    //   data: {issue: {} }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 1) {
    //     // After dialog is closed we're doing frontend updates
    //     // For add we're just pushing a new row inside DataService
    //     this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
    //     this.refreshTable();
    //   }
    // });
  }

  openEditModal(id: number) {
    this.store.dispatch(loadProduct({ id }));
    this.dialog.open(EditModalComponent, { width: '30rem', data: { id } });

    // this.id = id;
    // // index row is used just for debugging proposes and can be removed
    // this.index = i;
    // console.log(this.index);
    // const dialogRef = this.dialogService.open(EditDialogComponent, {
    //   data: {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 1) {
    //     // When using an edit things are little different, firstly we find record inside DataService by id
    //     const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //     // Then you update that record using data from dialogData (values you enetered)
    //     this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
    //     // And lastly refresh table
    //     this.refreshTable();
    //   }
    // });
  }

  deleteProduct(id: number) {
    // this.index = i;
    // this.id = id;
    this.dialog.open(DeleteModalComponent, {
      data: { id: id },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 1) {
    //     const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //     // for delete we use splice in order to remove single object from DataService
    //     this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
    //     this.refreshTable();
    //   }
    // });
  }

  private refreshTable() {}
}
