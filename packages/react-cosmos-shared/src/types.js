// @flow

type ExcludePattern = string | RegExp;

export type ExcludePatterns = ExcludePattern | Array<ExcludePattern>;

export type PlaygroundOpts = {
  loaderUri: string,
  projectKey: string,
  responsiveDevices: Array<{| label: string, width: number, height: number |}>,
  webpackConfigType: 'default' | 'custom'
};

export type LoaderOpts = {
  containerQuerySelector?: string
};

export type RuntimeErrorMessageData = {
  type: 'runtimeError'
};

export type LoaderReadyMessageData = {
  type: 'loaderReady',
  fixtures: Object
};

export type FixtureListUpdateMessageData = {
  type: 'fixtureListUpdate',
  fixtures: Object
};

export type FixtureSelectMessageData = {
  type: 'fixtureSelect',
  component: string,
  fixture: string
};

export type FixtureLoadMessageData = {
  type: 'fixtureLoad',
  fixtureBody: Object
};

export type FixtureUpdateMessageData = {
  type: 'fixtureUpdate',
  fixtureBody: Object
};

export type FixtureEditMessageData = {
  type: 'fixtureEdit',
  fixtureBody: Object
};

export type LoaderMessageData =
  | RuntimeErrorMessageData
  | LoaderReadyMessageData
  | FixtureListUpdateMessageData
  | FixtureSelectMessageData
  | FixtureLoadMessageData
  | FixtureUpdateMessageData
  | FixtureEditMessageData;

export type LoaderMessage = {
  data: LoaderMessageData
};
