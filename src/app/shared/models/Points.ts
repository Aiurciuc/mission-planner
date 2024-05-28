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


export const MAX_X= 2000;
export const MAX_Y= 2000;

export const POINTS_COLUMNS = ['id','name', 'xPoint', 'yPoint', 'deleteButton'];

export const MISSION_COLUMNS = ['id','name'];
