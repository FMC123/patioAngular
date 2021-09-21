import { Checkpoint } from '../checkpoint/checkpoint';
export class AccessMotiveRoutes {

  static fromListData(listData: Array<AccessMotiveRoutes>): Array<AccessMotiveRoutes> {
    return listData.map((data) => {
      return AccessMotiveRoutes.fromData(data);
    });
  }

    static fromData(data: AccessMotiveRoutes): AccessMotiveRoutes {
    if (!data) return new this();

    let routes = new this(
      data.sequence,
      data.checkpoint
    );

    return routes;
  }

   constructor(
        public sequence?: number,
        public checkpoint?: Checkpoint,
        ){ }

}
