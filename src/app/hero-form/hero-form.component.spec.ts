import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroFormComponent } from './hero-form.component';
import { FormsModule } from '@angular/forms';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /* View-to-Model Working Test. */
  
  it('should update the name in the model', async(() => {
    const nameInput = fixture.nativeElement.querySelector('#name');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      nameInput.value = 'Flash Gordon';
      nameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.model.name).toBe('Flash Gordon');
      });
    });
  }));
  
  /* Model to View Working Test. */
  it('should update the name in the form\'s input field', async(() => {
    component.model.name = 'Flash Gordon';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const nameInput = fixture.nativeElement.querySelector('#name');
      expect(nameInput.value).toBe('Flash Gordon');
    });
  }));
});

