import { ModalManager } from '../../shared/modals/modal-manager';
import { Mock } from '../mock';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-list-info',
  templateUrl: './mock-list-info.component.html'
})
export class MockListInfoComponent implements OnInit {
  @Input() mock: Mock;

  logModal: ModalManager = new ModalManager();

  leftColumn: Array<any>;

  ngOnInit() {
    console.log(this.mock)
    this.leftColumn = [
      ['Placa' , this.mock.p_ds_placa],
      ['Fito', this.mock.p_in_fito],
      ['CPF Motorista', this.mock.p_cpf_motorista],
      ['Acondicionamento', this.mock.p_ds_acondic],
      ['Armador', this.mock.p_ds_armador],
      ['Booking', this.mock.p_ds_booking],
      ['Descrição contêineres', this.mock.p_ds_conteiner],
      ['Fatura', this.mock.p_ds_fatura],
      ['Local carga e descarga', this.mock.p_ds_local_carg_desc],
      ['DS_Local', this.mock.p_ds_local_propr],
      ['Matricula', this.mock.p_ds_matricula],
      ['OIC', this.mock.p_ds_oic],
      ['Período carga / descarga', this.mock.p_ds_per_carga_desc],
      ['Terminal', this.mock.p_ds_terminal],
      ['Dead Line', this.mock.p_dt_dead_line],
      ['Data prevista carga', this.mock.p_dt_prevista_carga],
      ['Data prevista descarga', this.mock.p_dt_prevista_desc],
      ['Data Redex', this.mock.p_dt_redex],
      ['Hora prevista carga', this.mock.p_hr_prevista_carga],
      ['Hora prevista descarga', this.mock.p_hr_prevista_desc],
      ['Hora redex', this.mock.p_hr_redex],
      ['Requer Aprovação', this.mock.p_in_requer_aprov],
      ['Nome do motorista', this.mock.p_nm_motorista],
      ['NAVIO', this.mock.p_nm_navio],
      ['Nome da transportadora', this.mock.p_nm_transpo],
      ['Numero documento origem', this.mock.p_nr_doc_origem],
      ['Número DUE', this.mock.p_nr_due],
      ['Quantidade em KG', this.mock.p_qtde_kg],
      ['Capacidade Veículo', this.mock.p_qte_capac_veiculo],
      ['Quantidade contêineres', this.mock.p_qte_conteiner],
      ['Quantidade em Sacas', this.mock.p_qte_sacas],
      ['Tipo documento origem', this.mock.p_tp_doc_origem],
      ['Tipo embarque', this.mock.p_tp_embarque],
      ['Tipo Forração', this.mock.p_tp_forracao],
      ['Tipo Operação', this.mock.p_tp_oper_controle],
      ['Tipo Veículo', this.mock.p_tp_veiculo],
    ];

  }
}
