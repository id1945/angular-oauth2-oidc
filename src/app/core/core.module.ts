import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

const authAppInitializerFactory = (authService: AuthService):Promise<void> =>   {
  return authService.runInitialLoginSequence();
}

const authConfig: AuthConfig = {
  issuer: 'https://demo.duendesoftware.com', // Máy chủ của tôi
  clientId: 'interactive.public', // The "Auth Code + PKCE" client
  responseType: 'code',
  redirectUri: window.location.origin + '/angular-oauth2-oidc/', // Đăng nhập thành công rồi quay lại với url
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email api', // Yêu cầu offline_access hỗ trợ làm mới mã thông báo làm mới
  useSilentRefresh: true, // Cần thiết để Luồng mã đề xuất sử dụng làm mới dựa trên khung nội tuyến
  silentRefreshTimeout: 5000, // Để kiểm tra nhanh hơn
  timeoutFactor: 0.25, // Để kiểm tra nhanh hơn
  sessionChecksEnabled: true,
  showDebugInformation: true, // Cũng yêu cầu bật cấp độ "Verbose" trong devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator: 'semicolon' // Dấu chấm phẩy thực bị xáo trộn bởi mã hóa URI của Máy chủ ID Duende
};

const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://demo.duendesoftware.com/api'], // API Máy chủ của tôi
    sendAccessToken: true,
  }
};

// Chúng tôi cần một factory vì localStorage không khả dụng tại thời điểm xây dựng AOT
const storageFactory = (): OAuthStorage => {
  return localStorage;
}


@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardWithForcedLogin,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
        { provide: AuthConfig, useValue: authConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: OAuthStorage, useFactory: storageFactory },
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
