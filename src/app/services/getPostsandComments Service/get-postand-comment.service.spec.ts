import { TestBed } from '@angular/core/testing';

import { GetPostandCommentService } from './get-postand-comment.service';

describe('GetPostandCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPostandCommentService = TestBed.get(GetPostandCommentService);
    expect(service).toBeTruthy();
  });
});
