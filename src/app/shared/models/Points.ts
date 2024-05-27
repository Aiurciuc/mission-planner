export interface Point {
  name: string;
  xPoint: number;
  yPoint: number
}

export interface IndexedPoint {
  id: number;
  name: string;
  xPoint: number;
  yPoint: number,
}


export const POINTS_COLUMNS = ['id','name', 'xPoint', 'yPoint', 'deleteButton'];