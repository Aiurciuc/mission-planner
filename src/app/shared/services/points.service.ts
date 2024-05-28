import { Injectable, computed, signal } from '@angular/core';
import { IndexedPoint, Point } from '@shared/models/Points';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  #points = signal<IndexedPoint[]>([]);
  readonly points = computed(this.#points);

  #addId(point: Point): IndexedPoint{
    if(this.#points().length === 0){
      return {
        ...point,
        id: 1
      }
    }
    return {
      ...point,
      id: Math.max(...this.#points().map(point => point.id))+1
    }
  }
 

  #resetIds(points: IndexedPoint[]){
    return points.map((point, index) => ({...point, id: index+1}))
  }

  addPoint(point: Point) {
    this.#points.update((currentPoints) => [...currentPoints, this.#addId(point) ] )
  }

  removePoint(point: IndexedPoint) {
    this.#points.update((currentPoints) => {
      currentPoints.splice(currentPoints.indexOf(point), 1)
      return [...this.#resetIds(currentPoints)];
    } )
  }



  constructor() { }
}
