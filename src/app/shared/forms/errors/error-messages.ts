export class ErrorMessages {
  static get(code: string, label: string, parameters: Array<string> = []) {
      let config = {
          'required': `${label} é obrigatório(a)`,
          'maxlength': `${label} pode ter no máximo ${parameters[0]} caracteres`,
          'minlength': `${label} deve ter no mínimo ${parameters[0]} caracteres`,
          'max': `${label} deve possuir valor máximo de ${parameters[0]}`,
          'min': `${label} deve possuir valor mínimo de ${parameters[0]}`,
          'zero': `${label} indisponível`,
          'alreadyInUse': `${label} já está em uso`,
          'equalInvalid': `${label} não confere`,
          'invalid': `${label} é inválido(a)`,
          'autocompleteRequired': `${label} deve ser selecionado(a)`,
          'occupied': `${label} selecionado(a) está ocupado(a)`,
          'siloNotOccupied': `${label} selecionado(a) não está ocupado com nenhum lote`,
          'collaboratorHasStackholderValidator': `${label} não possui nenhum cliente relacionado`,
          'noPermissionForBatchCodeChange': `Usuário logado possui permissão apenas para entrada do tipo Normal`,
          'noPermissionForSacaria': `Armazém não permite armazenamento em sacaria`,
          'overNetWeightTolerance': `Peso da embalagem ultrapassou o limite aceitável acima de sua capacidade (${parameters[0]}kg)`
      };
      let message = config[code];
      if (message) {
        return message;
      }else {
        return config['invalid'];
      }
  }
}
