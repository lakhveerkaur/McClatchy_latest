import { TestBed, inject } from '@angular/core/testing';

import { NewsStatusService } from './news-status.service';

describe('NewsStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsStatusService]
    });
  });

  it('should be created', inject([NewsStatusService], (service: NewsStatusService) => {
    expect(service).toBeTruthy();
  }));
});
