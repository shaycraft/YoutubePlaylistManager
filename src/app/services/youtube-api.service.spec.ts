import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { YoutubeApiService } from './youtube-api.service';

describe('YoutubeApiService', () => {
  let service: YoutubeApiService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YoutubeApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(YoutubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
