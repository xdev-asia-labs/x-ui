/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/buttons`; params?: Router.UnknownInputParams; } | { pathname: `/cards`; params?: Router.UnknownInputParams; } | { pathname: `/data-display`; params?: Router.UnknownInputParams; } | { pathname: `/feedback`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/inputs`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/buttons`; params?: Router.UnknownOutputParams; } | { pathname: `/cards`; params?: Router.UnknownOutputParams; } | { pathname: `/data-display`; params?: Router.UnknownOutputParams; } | { pathname: `/feedback`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/inputs`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/buttons${`?${string}` | `#${string}` | ''}` | `/cards${`?${string}` | `#${string}` | ''}` | `/data-display${`?${string}` | `#${string}` | ''}` | `/feedback${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/inputs${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/buttons`; params?: Router.UnknownInputParams; } | { pathname: `/cards`; params?: Router.UnknownInputParams; } | { pathname: `/data-display`; params?: Router.UnknownInputParams; } | { pathname: `/feedback`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/inputs`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
