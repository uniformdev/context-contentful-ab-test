// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IHeroFields {
  /** Title */
  title?: string | undefined;

  /** Text */
  text?: string | undefined;

  /** Button Text */
  buttonText?: string | undefined;

  /** Button Link */
  buttonLink?: string | undefined;
}

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "hero";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Name */
  name?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Components */
  components?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITestFields {
  /** Name */
  name: string;

  /** Uniform Test */
  uniformTest: "Homepage Hero Test";

  /** Variants */
  variants: ITestVariant[];

  /** Personalization Criteria */
  unfrmOptPersonalizationCriteria?: Record<string, any> | undefined;
}

export interface ITest extends Entry<ITestFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "test";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITestVariantFields {
  /** Identifier */
  identifier?: string | undefined;

  /** Distribution */
  distribution?: number | undefined;

  /** Component */
  component?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

export interface ITestVariant extends Entry<ITestVariantFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "testVariant";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "hero" | "page" | "test" | "testVariant";

export type IEntry = IHero | IPage | ITest | ITestVariant;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
