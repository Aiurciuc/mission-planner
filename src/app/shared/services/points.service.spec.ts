import { TestBed } from '@angular/core/testing';

import { PointsService } from './points.service';

describe('PointsService', () => {
  let service: PointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addPoints', () => {
    it('should add a new point ', () => {
      const point = {
        name: 'mock',
        xPoint: 1,
        yPoint: 1,
      };
      service.addPoint(point);
      expect(service.points()).toEqual([
        {
          ...point,
          id: 1,
        },
      ]);
    });

    it('should add a new point with bigger index when there are points already', () => {
      const point = {
        name: 'mock',
        xPoint: 1,
        yPoint: 1,
      };
      service.addPoint(point);

      const point2 = {
        name: 'mock',
        xPoint: 1,
        yPoint: 1,
      };
      service.addPoint(point);

      expect(service.points()).toEqual([
        {
          ...point,
          id: 1,
        },
        {
          ...point2,
          id: 2,
        },
      ]);
    });
  });

  describe('removePoint', () => {
    it('should remove the specified point ', () => {
      const point = {
        name: 'mock',
        xPoint: 1,
        yPoint: 1,
      };
      service.addPoint(point);
      service.removePoint({...point, id: 1})
      expect(service.points()).toEqual([
      ]);
    });

    it('should remove the specified point and rearrange the others ', () => {
      const point1 = {
        name: 'mock1',
        xPoint: 1,
        yPoint: 1,
      };
      const point2 = {
        name: 'mock1',
        xPoint: 1,
        yPoint: 1,
      };
      const point3 = {
        name: 'mock1',
        xPoint: 1,
        yPoint: 1,
      };
      service.addPoint(point1);
      service.addPoint(point2);
      service.addPoint(point3);

      service.removePoint({...point2, id: 2})
      expect(service.points()).toEqual([
        {...point1,
          id:1
        },
        {...point3,
          id:2
        }
      ]);
    });

   
  });
});
