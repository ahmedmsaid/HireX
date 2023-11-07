/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobsServiceService } from './Jobs.service';

describe('Service: JobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsServiceService]
    });
  });

  it('should ...', inject([JobsServiceService], (service: JobsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
