import { Observable } from 'rxjs';
import { CheckpointService } from './../../checkpoint/checkpoint.service';
import { Checkpoint } from './../../checkpoint/checkpoint';
import { AreaService } from './../../area/area.service';
import { ErrorHandler } from '../../shared/errors/error-handler';
import { Masks } from '../../shared/forms/masks/masks';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Notification } from '../../shared/notification/notification';
import {AccessMotive} from '../access-motive';
import {AccessMotiveService} from '../access-motive.service';
import { Area } from 'src/app/area/area';
import { AccessMotiveRoutes } from '../access-motive-routes';


@Component({
  selector: 'app-access-motive-form',
  templateUrl: './access-motive-form.component.html'
})

export class AccessMotiveFormComponent implements OnInit {

  accessMotive: AccessMotive;
  form: FormGroup;
  loading: boolean = false;
  integerMask = Masks.integerMask;
  areas: Array<Area>;
  checkpoints: Array<Checkpoint>;
  listCheckpoint: Array<AccessMotiveRoutes>;

  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private accessMotiveService: AccessMotiveService,
    private errorHandler: ErrorHandler,
    private area: AreaService,
    private checkpoint: CheckpointService,
  ) { }

  ngOnInit() {
    this.area.list().then(areas => {
			this.areas = areas;
		});
    this.checkpoint.list().then(checkpoints => {
			this.checkpoints = checkpoints;
		});
    Notification.clearErrors();
    this.route.data.subscribe((data: {accessMotive: AccessMotive}) => {
      this.accessMotive = data.accessMotive;
      this.listCheckpoint = data.accessMotive.routes;
      this.buildForm();
    });
    
  }
  
  buildForm() {
    this.form = this.formBuilder.group({
          'name': [this.accessMotive && this.accessMotive.name ?  this.accessMotive.name : '' , [Validators.required]],
          'areaId': [this.accessMotive.area ? this.accessMotive.area.id : ''],
    });
  }

  adicionar(checkpoint: Checkpoint) {
    let checkpointAcess = new AccessMotiveRoutes();
    checkpointAcess.checkpoint = checkpoint;
    checkpointAcess.sequence = 1;
    this.adicionarCheckpoint(checkpointAcess);
  }

  adicionarCheckpoint(routes: AccessMotiveRoutes) {
    this.listCheckpoint.push(routes);
  }

  remover(checkpoint: AccessMotiveRoutes) {
    let indice = this.existeLoteSelecionado(checkpoint);
    console.log(indice);
    if (indice >= 0) {
      this.listCheckpoint.splice(indice, 1);
    }

  }

  existeLoteSelecionado(checkpoint: AccessMotiveRoutes) {
    // if (this.listCheckpoint && batch && batch.id) {
    if (this.listCheckpoint && checkpoint) {
      return this.existeLoteSelecionadoNaLista(this.listCheckpoint, checkpoint);
    }

    return -1;
  }

  existeLoteSelecionadoNaLista(batches: Array<AccessMotiveRoutes>, checkpoint: AccessMotiveRoutes) {
    for (let i = 0; i < batches.length; i++) {
      if (batches[i].checkpoint.id == checkpoint.checkpoint.id) {
        return i;
      }
    }

    return -1;
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
    this.accessMotive.name = this.form.value.name;
    this.accessMotive.area = this.areas.find(
      d => d.id === this.form.value.areaId
    );
    this.accessMotive.routes = this.listCheckpoint;
    this.accessMotiveService.save(this.accessMotive).then((accessMotive) => {
      Notification.success('salvo com sucesso!');
      // this.router.navigate(['/access-motive']);
      this.loading = false;
    }).catch((error) => this.handleError(error));
  }

  handleError(error) {
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }


}
