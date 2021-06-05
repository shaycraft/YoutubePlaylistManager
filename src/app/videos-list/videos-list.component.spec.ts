import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToastrService } from '../services/toastr.service';
import { YoutubeApiService } from '../services/youtube-api.service';

import { VideosListComponent } from './videos-list.component';

describe('VideosListComponent', () => {
  let component: VideosListComponent;
  let fixture: ComponentFixture<VideosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ VideosListComponent ],
      providers: [ToastrService, YoutubeApiService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
