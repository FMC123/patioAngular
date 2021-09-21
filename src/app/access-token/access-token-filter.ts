import { URLSearchParams } from '@angular/http';
import { DateTimeHelper } from './../shared/globalization/date-time-helper';
// import { Warehouse } from './../warehouse/warehouse';
import { User } from './../user/user';

export class AccessTokenFilter {

  static fromListData(listData: Array<AccessTokenFilter>): Array<AccessTokenFilter> {
    return listData.map((data) => {
      return AccessTokenFilter.fromData(data);
    });
  }

  static fromData(data: AccessTokenFilter): AccessTokenFilter {
    if (!data) return new this();
    let accessTokenFilter = new this(
      data.user,
      // data.warehouse,
      data.forkliftId,
      data.initialCreatedDate,
      data.finalCreatedDate,
      data.initialCreatedDateString,
      data.finalCreatedDateString
    );
    return accessTokenFilter;
  }

  constructor(
    public user?: User,
    // public warehouse?: Warehouse,
    public forkliftId?: string,
    public initialCreatedDate?: number,
    public finalCreatedDate?: number,
    initialCreatedDateString?: string,
    finalCreatedDateString?: string
  ) {
    this.user = User.fromData(user);
    // this.warehouse = Warehouse.fromData(warehouse);

    if (initialCreatedDateString) {
      this.initialCreatedDateString = initialCreatedDateString;
    }

    if (finalCreatedDateString) {
      this.finalCreatedDateString = finalCreatedDateString;
    }
  }

  get initialCreatedDateString(): string{
    return DateTimeHelper.toDDMMYYYY(this.initialCreatedDate);
  }
  set initialCreatedDateString(initialCreatedDateString: string){
    this.initialCreatedDate = DateTimeHelper.fromDDMMYYYY(initialCreatedDateString);
  }

  get finalCreatedDateString(): string{
    return DateTimeHelper.toDDMMYYYY(this.finalCreatedDate);
  }
  set finalCreatedDateString(finalCreatedDateString: string){
    this.finalCreatedDate = DateTimeHelper.fromDDMMYYYY(finalCreatedDateString, true /* endOfDay */);
  }

 public toURLSearchParams(): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();

    if (this.user.name) {
      params.set('user.name', this.user.name);
    }

    // if (this.warehouse.id) {
    //   params.set('warehouse.id', this.warehouse.id);
    // }

    if (this.forkliftId) {
      params.set('forkliftId', this.forkliftId);
    }

    if (this.initialCreatedDate) {
      params.set('initialCreatedDate', this.initialCreatedDate + '');
    }

    if (this.finalCreatedDate) {
      params.set('finalCreatedDate', this.finalCreatedDate + '');
    }

    return params;
  }

}
