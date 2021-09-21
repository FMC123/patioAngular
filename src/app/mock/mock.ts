export class Mock {

  static fromListData(listData: Array<Mock>): Array<Mock> {
    return listData.map((data) => {
      return Mock.fromData(data);
    });
  }

    static fromData(data: Mock): Mock {
    if (!data) return new this();

    let mock = new this(
      data.id,
      data.name,
      data.p_ds_placa,
      data.p_in_fito,
    );

    return mock;
  }

   constructor(
        public id?: string,
        public name?: number,
        public p_ds_placa?: string,
        public p_in_fito?: string,
        public p_cpf_motorista?: string,
        public p_ds_acondic?: string,
        public p_ds_armador?: string,
        public p_ds_booking?: string,
        public p_ds_conteiner?: string,
        public p_ds_fatura?: string,
        public p_ds_local_carg_desc?: string,
        public p_ds_local_propr?: string,
        public p_ds_matricula?: string,
        public p_ds_oic?: string,
        public p_ds_per_carga_desc?: string,
        public p_ds_terminal?: string,
        public p_dt_dead_line?: string,
        public p_dt_prevista_carga?: string,
        public p_dt_prevista_desc?: string,
        public p_dt_redex?: string,
        public p_hr_prevista_carga?: string,
        public p_hr_prevista_desc?: string,
        public p_hr_redex?: string,
        public p_in_requer_aprov?: string,
        public p_nm_motorista?: string,
        public p_nm_navio?: string,
        public p_nm_transpo?: string,
        public p_nr_doc_origem?: string,
        public p_nr_due?: string,
        public p_qtde_kg?: string,
        public p_qte_capac_veiculo?: string,
        public p_qte_conteiner?: string,
        public p_qte_sacas?: string,
        public p_tp_doc_origem?: string,
        public p_tp_embarque?: string,
        public p_tp_forracao?: string,
        public p_tp_oper_controle?: string,
        public p_tp_veiculo?: string,
        ){}

}
