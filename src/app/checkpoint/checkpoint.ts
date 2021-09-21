import { User } from '../user/user';
import { DateTimeHelper, NumberHelper } from '../shared/globalization';

export class Checkpoint {

  static fromListData(listData: Array<Checkpoint>): Array<Checkpoint>{
    return listData.map((data) => {
      return Checkpoint.fromData(data);
    });
  }

  static fromData(data: Checkpoint): Checkpoint {
    if (!data) return new this();
    let serviceGroup = new this(
      data.id,
      data.name,
      data.description,
      data.containerStacking,
      data.containerWithdrawal,
      data.containerSeal,
      data.supervisor,
      data.alterMotacesso,
      data.vehicleRegister,
      data.checkpointTime,
      data.maxChrJustification,
      data.finalizado,
      data.justification,
    );
    return serviceGroup;
  }

  constructor(public id?: string,
              public name?: string,
              public description?: string,
              public containerStacking?: boolean,
              public containerWithdrawal?: boolean,
              public containerSeal?: boolean,
              public supervisor?: boolean,
              public alterMotacesso?: boolean,
              public vehicleRegister?: boolean,
              public checkpointTime?: number,
              public maxChrJustification?: number,
              public finalizado?: boolean,
              public justification?: boolean,
              
              ) {
  }
}