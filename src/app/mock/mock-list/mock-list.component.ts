import { Component, OnInit, OnDestroy }      from '@angular/core';
import { Notification } from '../../shared/notification/notification';
import { ErrorHandler, ModalManager, Search } from '../../shared/shared.module';
import { Logger } from '../../shared/logger/logger';
import { Page } from '../../shared/page/page';
import {MockService} from '../mock.service';
import {Mock} from '../mock';

@Component({
  selector: 'app-mock-list',
  templateUrl: './mock-list.component.html'
})
export class MockListComponent implements OnInit, OnDestroy {
  loading: boolean;
  error: boolean;
  deleteConfirm: ModalManager = new ModalManager();

  page: Page<Mock> = new Page<Mock>();
  search: Search = new Search();
  mock: any;

  constructor(private mockService: MockService,
              private errorHandler: ErrorHandler,
              private logger: Logger) {}

  ngOnInit() {
    this.loadList();
    // this.page.changeQuery.subscribe(() => {
    //   this.loadList();
    // });
    this.search
        .subscribe(() => {
          this.loadList();
        });
  }

  loadList() {
    this.error = false;
    this.loading = true;
    this.mockService.findPlaca(this.search.value).then((res) => {
      this.mock = res;
    this.loading = false;
    }).catch(error => this.handleError(error));
  }

  // loadList() {
  //   this.error = false;
  //   this.loading = true;
  //   this.mockService.listPaged(this.search.value, this.page).then(() => {
  //   this.loading = false;
  //   }).catch(error => this.handleError(error));
  // }

  // delete(id: string | number) {
  //   this.mockService.delete(id).then(() => {
  //     Notification.success('excluído com sucesso!');
  //     this.loadList();
  //   }).catch(error => this.handleError(error));
  // }

  ngOnDestroy() {
    this.page.changeQuery.unsubscribe();
    this.search.destroy();
  }

  handleError(error){
    this.error = true;
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }
}
