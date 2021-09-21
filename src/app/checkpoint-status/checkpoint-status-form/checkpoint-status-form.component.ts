import { ErrorHandler } from '../../shared/errors/error-handler';
import { Masks } from '../../shared/forms/masks/masks';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Notification } from '../../shared/notification/notification';
import {CheckpointStatus} from '../checkpoint-status';
import {CheckpointStatusService} from '../checkpoint-status.service';
import { ModalManager } from 'src/app/shared/modals/modal-manager';

@Component({
  selector: 'app-checkpoint-status-form',
  templateUrl: './checkpoint-status-form.component.html'
})

export class CheckpointStatusFormComponent implements OnInit {
  checkpointStatus: CheckpointStatus = new CheckpointStatus();
  @Input() statusModal: ModalManager;
  @Input() statusForm: CheckpointStatus;
  @Input() listStatus: Array<CheckpointStatus>;
  form: FormGroup;
  loading: boolean = false;
  integerMask = Masks.integerMask;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private checkpointStatusService: CheckpointStatusService,
    private errorHandler: ErrorHandler,
  ) { }

  ngOnInit() {
    Notification.clearErrors();
    // this.route.data.forEach((data: {checkpointStatus: CheckpointStatus}) => {
    //   this.teste = data.checkpointStatus;
    // });
    this.checkpointStatusService.list().then(res=>{
      this.listStatus = res;
    });
    console.log(this.listStatus);
    console.log(this.statusModal);
    console.log(this.statusForm);
    
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
          'name': [this.checkpointStatus && this.checkpointStatus.name ?  this.checkpointStatus.name : '' , [Validators.required]],
          'message': [this.checkpointStatus && this.checkpointStatus.message ?  this.checkpointStatus.message : '' , [Validators.required]],
    });
  }

  save() {
    this.submitted = true;

    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].markAsDirty();
    });

    if (!this.form.valid) {
      return;
    }
    this.loading = true;
    
    this.checkpointStatus.name = this.form.value.name;
    this.checkpointStatus.message = this.form.value.message;
    this.checkpointStatus.checkpoint = this.statusForm;
    this.checkpointStatusService.save(this.checkpointStatus).then(() => {
      Notification.success('salvo com sucesso!');
      this.loading = false;
      // this.router.navigate(['/checkpoint-status']);
    }).catch((error) => this.handleError(error));
  }

  handleError(error) {
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }

}
