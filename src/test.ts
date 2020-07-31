// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

interface IContext {
  <T>(id: string): T;
  keys(): string[];
  }

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): IContext;
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context: IContext = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
