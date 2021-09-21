export class Area {

  static fromListData(listData: Array<Area>): Array<Area> {
    return listData.map((data) => {
      return Area.fromData(data);
    });
  }

    static fromData(data: Area): Area {
    if (!data) return new this();

    let area = new this(
      data.id,
      data.name,
      data.description,
    );

    return area;
  }

   constructor(
        public id?: string,
        public name?: number,
        public description?: string,
        ){}

}
