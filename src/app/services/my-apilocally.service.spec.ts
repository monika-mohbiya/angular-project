import { TestBed } from '@angular/core/testing';

import { MyAPIlocallyService } from './my-apilocally.service';

describe('MyAPIlocallyService', () => {
  let service: MyAPIlocallyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAPIlocallyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
