import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gamemaster.addition',
  appName: 'Addition Master',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    AdMob: {
      // 테스트 기기 ID (실제 기기에서 테스트할 때 추가)
      testingDevices: [],
      // 테스트 모드 활성화 (출시 전 false로 변경)
      initializeForTesting: true
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1a2e',
      showSpinner: false
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true  // 개발 중에만 true, 출시 시 false
  }
};

export default config;
