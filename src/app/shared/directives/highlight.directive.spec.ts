import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive: HighlightDirective = new HighlightDirective(this.el);
    expect(directive).toBeTruthy();
  });
});
