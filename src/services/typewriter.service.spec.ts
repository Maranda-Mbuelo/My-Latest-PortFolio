/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypewriterService } from './typewriter.service';

describe('Service: Typewriter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypewriterService]
    });
  });

  it('should ...', inject([TypewriterService], (service: TypewriterService) => {
    expect(service).toBeTruthy();
  }));
});
