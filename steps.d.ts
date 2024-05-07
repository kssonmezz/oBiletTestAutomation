/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type mainPagePage = typeof import('./pages/mainPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, mainPagePage: mainPagePage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
