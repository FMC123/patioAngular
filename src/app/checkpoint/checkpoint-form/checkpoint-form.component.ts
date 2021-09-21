import { CheckpointStatus } from './../../checkpoint-status/checkpoint-status';
import { Checkpoint } from '../checkpoint';
import { ErrorHandler } from '../../shared/errors/error-handler';
import { Masks } from '../../shared/forms/masks/masks';
import { Notification } from '../../shared/notification/notification';

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalManager } from 'src/app/shared/modals/modal-manager';
import { CheckpointService } from '../checkpoint.service';
import { CheckpointStatusService } from 'src/app/checkpoint-status/checkpoint-status.service';

@Component({
  selector: 'app-checkpoint-form',
  templateUrl: './checkpoint-form.component.html'
})
export class CheckpointFormComponent implements OnInit {
  serviceGroup: Checkpoint;
  form: FormGroup;
  loading: boolean = false;
  integerMask = Masks.integerMask;
  submitted: boolean = false;
  disableCode: boolean = true;
  criarStatus: ModalManager = new ModalManager();
  @Input() listStatus: Array<CheckpointStatus> = [];

  // @Input() statusForm: CheckpointStatus;
  @Input() checkpointStatus: CheckpointStatus;

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceGroupService: CheckpointService,
    private errorHandler: ErrorHandler,
    private statusCheckpoint : CheckpointStatusService,
  ) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {serviceGroup: Checkpoint}) => {
      console.log(data)
      this.serviceGroup = data.serviceGroup;
    });
    this.statusCheckpoint.list().then(res => {
      res.forEach((status) => {
        if(status.checkpoint.id === this.serviceGroup.id) this.listStatus.push(status);
      })
    });
    this.statusCheckpoint.allStatus.subscribe((res) =>{
      this.listStatus.push(res)
    });
    // console.log(this.serviceGroup)
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      'description': [this.serviceGroup.description || '', Validators.required],
      'name': [this.serviceGroup.name || '', Validators.required],
      'containerStacking': [this.serviceGroup.containerStacking || false],
      'containerWithdrawal': [this.serviceGroup.containerWithdrawal || false],
      'containerSeal': [this.serviceGroup.containerSeal || false],
      'supervisor': [this.serviceGroup.supervisor || false],
      'alterMotacesso': [this.serviceGroup.alterMotacesso || false],
      'vehicleRegister': [this.serviceGroup.vehicleRegister || false],
      'checkpointTime': [this.serviceGroup.checkpointTime || '', Validators.required],
      'maxChrJustification': [this.serviceGroup.maxChrJustification || '', Validators.required],
      'finalizado': [this.serviceGroup.finalizado || false],
      'justification': [this.serviceGroup.justification || false],
    });
  }
  modalStatus(){
    this.criarStatus.open(this.serviceGroup);
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
    this.serviceGroup.name = this.form.value.name;
    this.serviceGroup.description = this.form.value.description;
    this.serviceGroup.containerStacking = this.form.value.containerStacking;
    this.serviceGroup.containerWithdrawal = this.form.value.containerWithdrawal;
    this.serviceGroup.containerSeal = this.form.value.containerSeal;
    this.serviceGroup.supervisor = this.form.value.supervisor;
    this.serviceGroup.alterMotacesso = this.form.value.alterMotacesso;
    this.serviceGroup.vehicleRegister = this.form.value.vehicleRegister;
    this.serviceGroup.checkpointTime = this.form.value.checkpointTime;
    this.serviceGroup.maxChrJustification = this.form.value.maxChrJustification;
    this.serviceGroup.finalizado = this.form.value.finalizado;
    this.serviceGroup.justification = this.form.value.justification;
    console.log(this.serviceGroup);
    return this.serviceGroupService.save(this.serviceGroup).then(() => {
      Notification.success('Grupo de serviço salvo com sucesso!');
      this.router.navigate(['/checkpoint']);
    }).catch(error => this.handleError(error));

  }

  handleError(error) {
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }

  get statusFinalizado(){
    return this.form.value.finalizado;
  }

  get justify(){
    return this.form.value.justification;
  }

  get editing(){
    return !!this.serviceGroup && !!this.serviceGroup.id;
  }

}
