import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
import { Context, ManifestV2 } from "@uniformdev/context";
import { NextPageContext } from "next";
import manifest from "./manifest.json";

export function createUniformContext(serverContext?: NextPageContext) {
  const uniformContext = new Context({
    manifest: manifest as ManifestV2,
    defaultConsent: true,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
  });

  return uniformContext;
}