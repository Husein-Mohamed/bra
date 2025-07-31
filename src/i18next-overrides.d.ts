// src/react-i18next.d.ts

// First, import the modules so we can augment them
import "react-i18next";
import "i18next";

// Augment react-i18next's TFunction if desired (but core TFunction comes from i18next)
declare module "react-i18next" {
  interface TFunction {
    // Overload: when returnObjects: true is passed, allow any return type
    (key: string | string[], options: { returnObjects: true }): any;
    // You may also add:
    (key: string | string[], defaultValue: string, options: { returnObjects: true }): any;
  }
}

// Augment the i18next core TFunction as well, because react-i18next’s t is based on it
declare module "i18next" {
  interface TFunction {
    // Overload: when returnObjects: true is passed, allow any
    (key: string | string[], options: { returnObjects: true; [prop: string]: any }): any;
    (key: string | string[], defaultValue: string, options: { returnObjects: true; [prop: string]: any }): any;
  }
}
