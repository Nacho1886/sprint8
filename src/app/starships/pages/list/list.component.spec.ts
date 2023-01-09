import { ListComponent } from './list.component';
import { ApiRequestsService } from '../../services/api-requests.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Starship } from '../../interfaces/starship';

describe('ListComponent', () => {
  let component: ListComponent;
  let apiRequestsService: ApiRequestsService;
  let router: Router;

  beforeEach(() => {
    apiRequestsService = new ApiRequestsService(null);
    router = new Router(null);
    component = new ListComponent(apiRequestsService, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getStarship', () => {
    it('should navigate to the correct starship page', () => {
      const navigateSpy = spyOn(router, 'navigate');
      const url = 'https://swapi.co/api/starships/12/';
      component.getStarship(url);
      expect(navigateSpy).toHaveBeenCalledWith(['/starships/12']);
    });
  });

  describe('onScroll', () => {
    it('should load more pages when scrollY + innerHeight is greater than or equal to document.body.offsetHeight', () => {
      const pageSpy = spyOnProperty(component.page$, 'next');
      component.isLoading = false;
      window.innerHeight = 100;
      window.scrollY = 100;
      document.body.offsetHeight = 200;
      component.onScroll();
      expect(pageSpy).toHaveBeenCalledWith(2);
    });

    it('should not load more pages when isLoading is true', () => {
      const pageSpy = spyOnProperty(component.page$, 'next');
      component.isLoading = true;
      window.innerHeight = 100;
      window.scrollY = 100;
      document.body.offsetHeight = 200;
      component.onScroll();
      expect(pageSpy).not.toHaveBeenCalled();
    });

    it('should not load more pages when scrollY + innerHeight is less than document.body.offsetHeight', () => {
      const pageSpy = spyOnProperty(component.page$, 'next');
      component.isLoading = false;
      window.innerHeight = 100;
      window.scrollY = 50;
      document.body.offsetHeight = 200;
      component.onScroll();
      expect(pageSpy).not.toHaveBeenCalled();
    });
  });
});




















/* import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../../services/api-requests.service';
import { ListComponent } from './list.component';
import { Starship } from '../../interfaces/starship';
import { BehaviorSubject, concatMap } from 'rxjs';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let apiRequestsService: ApiRequestsService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        {
          provide: ApiRequestsService,
          useValue: {
            getStarshipsPageApi: (page: number) => of({
              results: [
                { name: 'Millenium Falcon' },
                { name: 'X-Wing Fighter' }
              ],
              next: 'https://swapi.dev/api/starships/?page=3'
            })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject( */
