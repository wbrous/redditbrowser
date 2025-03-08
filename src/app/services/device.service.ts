import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  }

  isTablet(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return /iPad|Android(?!.*Mobile)|Tablet/i.test(navigator.userAgent);
    }
    return false;
  }
}