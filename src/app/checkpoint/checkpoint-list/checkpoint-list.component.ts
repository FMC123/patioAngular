import { Checkpoint } from '../checkpoint';
import { CheckpointService } from '../checkpoint.service';
import { Component, OnInit, OnDestroy }      from '@angular/core';
import { Notification } from '../../shared/notification/notification';
import { ErrorHandler, ModalManager, Search } from '../../shared/shared.module';
import { Logger } from '../../shared/logger/logger';
import { Page } from '../../shared/page/page';

@Component({
  selector: 'app-checkpoint-list',
  templateUrl: './checkpoint-list.component.html'
})
export class CheckpointListComponent implements OnInit, OnDestroy {
  loading: boolean;
  error: boolean;
  deleteConfirm: ModalManager = new ModalManager();

  page: Page<Checkpoint> = new Page<Checkpoint>();
  search: Search = new Search();

  get serviceGroups(): Checkpoint[]{
    return this.page.data;
  }

  constructor(private serviceGroupService: CheckpointService,
              private errorHandler: ErrorHandler,
              private logger: Logger) {}

  ngOnInit() {
    Notification.clearErrors();
    this.loadList();
    this.page.changeQuery.subscribe(() => {
      this.loadList();
    });
    this.search
        .subscribe(() => {
          this.loadList();
        });
  }

  loadList() {
    this.error = false;
    this.loading = true;
    this.serviceGroupService.listPaged(this.search.value, this.page).then(() => {
      this.loading = false;
    }).catch(error => this.handleError(error));
  }

  delete(id: string | number) {
    this.serviceGroupService.delete(id).then(() => {
      Notification.success('Tabela excluída com sucesso!');
      this.loadList();
    }).catch(error => this.handleError(error));
  }

  ngOnDestroy() {
    this.page.changeQuery.unsubscribe();
    this.search.destroy();
  }

  handleError(error) {
    this.error = true;
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }
}
