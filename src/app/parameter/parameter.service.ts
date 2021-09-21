import { ParameterType } from './parameter-type';
import { Endpoints } from './../endpoints';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { Parameter } from './parameter';
import { AuthService } from './../auth/auth.service';
import { Page } from './../shared/page/page';
import { toPromise } from 'rxjs/operator/toPromise';

@Injectable()
export class ParameterService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private auth: AuthService) { }

  types(): Promise<Array<ParameterType>> {
    return this.http
      .get(`${Endpoints.parametersUrl}/types`)
      .toPromise()
      .then(response => {
        return ParameterType.fromListData(response.json());
      });
  }

  replaceStakeholderForCollaborator(): Promise<boolean> {
    return Promise.resolve(
      this.auth.findParameterBoolean('COLLABORATOR_AT_FISCAL_NOTE_IN')
    );
  }

  sacksInKilos(): Promise<number> {

    let sacksInKilos: number = Number(this.auth.findParameterValue('SACKS_IN_KILOS'));

    // valor padrão se não está definido a quantidade de sacas em quilos
    if (!sacksInKilos) {
      sacksInKilos = 60;
    }

    return Promise.resolve(sacksInKilos);
  }

  listPaged(filter: any, page: Page<Parameter>) {
    let params = new URLSearchParams();
    params.appendAll(page.toURLSearchParams());
    params.append('filter', filter ? filter : '');
    return this.http
      .get(`${Endpoints.parametersUrl}/paged`, {
        search: params
      })
      .toPromise()
      .then(response => {
        page.setResultFromServer(response.json());
        page.data = Parameter.fromListData(page.data);
        return page;
      });
  }

  find(id: number | string) {
    let url = `${Endpoints.parametersUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        let parameter = Parameter.fromData(response.json());
        return parameter;
      });
  }

  findByKey(key: string) {
    let url = `${Endpoints.parametersUrl}/key/${key}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        if (response != null) {

          // se a resposta for sem valor, ocorre exceção
          try {
            let parameter = Parameter.fromData(response.json());
            return parameter;
          }
          catch (e) { }
        }

        return null;
      });
  }

  //corrigir
  // save(parameter: Parameter): Promise<Parameter> {
  //   return;
  // };
  save(parameter: Parameter): Promise<Parameter> {
    if (parameter.id) {
      return this.update(parameter);
      // return this.create(parameter).then(() => this.auth.refreshParameters());
    } else {
      return this.create(parameter);
    }
  }

  delete(id: number | string): Promise<void> {
    let url = `${Endpoints.parametersUrl}/${id}`;
    return this.http
      .delete(url, {
        headers: this.auth.appendOrCreateAuthHeader(this.headers)
      })
      .toPromise()
      .then(() => this.auth.refreshParameters())
      .then(() => null);
  }

  getConstants() {
    let url = `${Endpoints.parametersUrl}/constants`;
    return this.http
      .get(url, {
        headers: this.auth.appendOrCreateAuthHeader(this.headers)
      })
      .toPromise()
      .then(res => res.json());
  }

  private create(parameter: Parameter): Promise<Parameter> {
    const url = `${Endpoints.parametersUrl}`;
    return this.http
      .post(url, JSON.stringify(parameter), {
        headers: this.auth.appendOrCreateAuthHeader(this.headers)
      })
      .toPromise()
      .then(res => res.json());
  }

  private update(parameter: Parameter): Promise<Parameter> {
    const url = `${Endpoints.parametersUrl}/${parameter.id}`;
    return this.http
      .put(url, parameter, {
        headers: this.auth.appendOrCreateAuthHeader(this.headers)
      })
      .toPromise()
      .then(() => parameter);
  }

  /**
   * Verifica se a nota fiscal é a tela padrão.
   * Se não exitse nenhum parâmetro configurado, a tela de nota fiscal é o padrão.
   */
  public fiscalNoteScreenDefault(): boolean {

    let parameter = this.auth.findParameterValue('INPUT_PREVIEW_SCREEN_DEFAULT');

    if (parameter == null || parameter.toUpperCase() == 'Nota fiscal de entrada'.toUpperCase()) {
      return true;
    }

    return false;
  }

  /**
   * Verifica se a ordem de compra é a tela padrão.
   */
  public purchaseOrderScreenDefault(): boolean {

    let parameter = this.auth.findParameterValue('INPUT_PREVIEW_SCREEN_DEFAULT');

    if (parameter != null && parameter.toUpperCase() == 'Ordem de compra'.toUpperCase()) {
      return true;
    }

    return false;
  }

  /**
   * Verifica se deve mostrar o sub tipo na instrução de serviço.
   */
  public serviceInstructionHideSubType(): boolean {

    let parameter = this.auth.findParameterValue('SERVICE_INSTRUCTION_HIDE_SUB_TYPE');

    if (parameter != null && parameter.toUpperCase() == 'S'.toUpperCase()) {
      return true;
    }

    return false;
  }


  /**
   * Verifica se os parâmetros da instrução de serviço é para Armazém Geral
   */
  public specificParamsServiceInstructionWahehouseGeneral(): boolean {

    let parameter = this.auth.findParameterValue('SERVICE_INSTRUCTION_FOR');

    if (parameter != null && parameter.toUpperCase() == 'Armazém Geral'.toUpperCase()) {
      return true;
    }

    return false;
  }

  /**
   * Verifica se usa despejo proporcional
   */
  public serviceInstructionUseProportionalEviction(): boolean {

    let parameter = this.auth.findParameterValue('SERVICE_INSTRUCTION_USE_PROPORTIONAL_EVICTION');

    if (parameter != null && parameter.toUpperCase() == 'S'.toUpperCase()) {
      return true;
    }

    return false;
  }

  /**
   * Quantidade máxima para despejo proporcional
   */
  public serviceInstructionMaxProportionalEviction(): number {

    let parameter = this.auth.findParameterValue('SERVICE_INSTRUCTION_MAX_PROPORTIONAL_EVICTION');

    if (parameter != null) {
      let valor: number = parseInt(parameter, 10);
      if (isNaN(valor) == false) {
        return valor;
      }
    }

    return 0;
  }


  /**
   * Verificar se é para pular a validação de peso da operação em lote
   */
  public skipValidationBatchOperationWeight(): boolean {

    let parameter = this.auth.findParameterValue('BYPASS_BATCH_OPERATION_WEIGHT_CHECK');

    if (parameter != null && parameter.toUpperCase() == 'S'.toUpperCase()) {
      return true;
    }

    return false;
  }

  /**
   * Verifica se os parâmetros da instrução de serviço é para Armazém Geral
   */
  public defaultBatchWeight(): number {

    let parameter = this.auth.findParameterValue('DEFAULT_BATCH_WEIGHT');

    return parseFloat(parameter);
  }
}
