import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingTextService {
  private loadingTexts: string[] = ['Loading...', "Harmony in music, harmony in climate.",  'Please wait...', "Climate matters, sing a sustainable tune.",  'Almost there...', "Climate vibes, positive vibes."];
  private currentTextIndex = 0;
  private currentTextSubject = new BehaviorSubject<string>(this.loadingTexts[this.currentTextIndex]);

  constructor() {
    timer(0, 3000).pipe(
      switchMap(() => this.getNextText())
    ).subscribe();
  }

  private getNextText(): Observable<void> {
    this.currentTextIndex = (this.currentTextIndex + 1) % this.loadingTexts.length;
    this.currentTextSubject.next(this.loadingTexts[this.currentTextIndex]);
    return new Observable();
  }

  getCurrentText(): Observable<string> {
    return this.currentTextSubject.asObservable();
  }
}
