import { Checkpoint } from './../checkpoint/checkpoint';
import { Area } from './../area/area';
import { AccessMotiveRoutes } from './access-motive-routes';
export class AccessMotive {

  static fromListData(listData: Array<AccessMotive>): Array<AccessMotive> {
    return listData.map((data) => {
      return AccessMotive.fromData(data);
    });
  }

    static fromData(data: AccessMotive): AccessMotive {
    if (!data) return new this();

    let accessMotive = new this(
      data.id,
      data.name,
      data.routes,
      data.area
    );

    return accessMotive;
  }

   constructor(
        public id?: string,
        public name?: number,
        public routes?: Array<AccessMotiveRoutes>,
        public area?: Area,
        ){
          this.routes = routes || new Array<AccessMotiveRoutes>();
        }

}
