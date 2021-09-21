import { Checkpoint } from './../checkpoint/checkpoint';
export class CheckpointStatus {

  static fromListData(listData: Array<CheckpointStatus>): Array<CheckpointStatus> {
    return listData.map((data) => {
      return CheckpointStatus.fromData(data);
    });
  }

    static fromData(data: CheckpointStatus): CheckpointStatus {
    if (!data) return new this();

    let checkpointStatus = new this(
      data.id,
      data.name,
      data.message,
      data.checkpoint,
    );

    return checkpointStatus;
  }

   constructor(
        public id?: string,
        public name?: string,
        public message?: string,
        public checkpoint?: Checkpoint,
        ){}

}
