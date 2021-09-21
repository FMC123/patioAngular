import { ErrorHandler } from '../../shared/errors/error-handler';
import { Masks } from '../../shared/forms/masks/masks';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Notification } from '../../shared/notification/notification';
import {Area} from '../area';
import {AreaService} from '../area.service';


@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html'
})

export class AreaFormComponent implements OnInit {

  area: Area;
  form: FormGroup;
  loading: boolean = false;
  integerMask = Masks.integerMask;

  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private areaService: AreaService,
    private errorHandler: ErrorHandler,
  ) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {area: Area}) => {
      this.area = data.area;
      this.buildForm();
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
          'name': [this.area && this.area.name ?  this.area.name : '' , [Validators.required]],
          'description': [this.area && this.area.description
            ? this.area.description : '', [Validators.required]],
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
    this.area.name = this.form.value.name;
    this.area.description = this.form.value.description;
    this.areaService.save(this.area).then((area) => {
      Notification.success('salvo com sucesso!');
      this.router.navigate(['/area']);
    }).catch((error) => this.handleError(error));
  }

  handleError(error) {
    this.loading = false;
    return this.errorHandler.fromServer(error);
  }


}
