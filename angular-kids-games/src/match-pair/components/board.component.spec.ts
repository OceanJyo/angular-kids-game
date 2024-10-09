import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardComponent } from './board.component';
import { MatchPairCardService } from '../services/match-pair-card.service';
import { MatchPairBoardSize } from '../../app/models/kidsgames.model';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let service: MatchPairCardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BoardComponent],
      providers: [MatchPairCardService]
    })
    .compileComponents();
  
    service = TestBed.inject(MatchPairCardService);
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    const bs: MatchPairBoardSize = {x: 4, y: 4};
    component.boardSize = bs;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
