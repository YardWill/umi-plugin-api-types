
interface ILogFunc {
  (message: string): void;
}

interface IModifyFunc {
  (memo: any): any;
}

interface IChangeWebpackConfigFunc {
  (webpackConfig: object): object;
}

export interface IApi {
  log: {
    info: ILogFunc,
    warn: ILogFunc,
    error: ILogFunc,
    fatal: ILogFunc,
    success: ILogFunc,
    complete: ILogFunc,
    pending: ILogFunc,
    log: ILogFunc,
  },
  paths: {
    cwd: string,
    outputPath: string,
    absOutputPath: string,
    absNodeModulesPath: string,
    pagesPath: string,
    absPagesPath: string,
    absSrcPath: string,
    tmpDirPath: string,
    absTmpDirPath: string,
  },
  modifyDefaultConfig: IModifyFunc,
  modifyWebpackConfig: IModifyFunc,
  modifyAFWebpackOpts: IModifyFunc,
  chainWebpackConfig: IChangeWebpackConfigFunc,
}
