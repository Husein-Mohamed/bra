// src/components/CookieConsentSetup.tsx
"use client";

import { useLayoutEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookieConsentSetup() {
  useLayoutEffect(() => {
    console.log("[CookieConsent] initializing…");

    if (!CookieConsent?.run) {
      console.error("[CookieConsent] vanilla-cookieconsent.run is not available");
      return;
    }

    const cc = CookieConsent.run({
      categories: {
        necessary: { enabled: true, readOnly: true },
      },

      guiOptions: {
        consentModal: { layout: "bar", position: "bottom center" },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Privacy Overview",
              description: `
                We use cookies to enhance your browsing experience, content,
                and analyze our traffic. By clicking “Accept All”, you consent
                to our use of cookies.<br/>
                <a href="/privacy-policy">OUR DATA PRIVACY POLICY</a>
              `,
              acceptAllBtn: "ACCEPT ALL",
              acceptNecessaryBtn: "DENY",
            },
            preferencesModal: {
              sections: [],
            },
          },
        },
      },

      onFirstConsent: ({ cookie }) => {
        console.log("[CookieConsent] onFirstConsent:", cookie);
      },
      onConsent: ({ cookie }) => {
        console.log("[CookieConsent] onConsent:", cookie);
      },
      onChange: ({ cookie }) => {
        console.log("[CookieConsent] onChange:", cookie);
      },
    });

    if (!cc) {
      console.error("[CookieConsent] run() did not return an API instance");
      return;
    }

    console.log("[CookieConsent] initialized successfully", cc);

    // ✅ Override HTML bar via DOM injection (vanilla style)
    if (typeof window !== "undefined" && window.CookieConsent) {
      (window as any).CookieConsent.config.elements = {
        bar: `
          <div class="cc-container">
            <div class="cc-side-left">
              <div class="cc-header">{{title}}</div>
              <div class="cc-content">{{description}}</div>
            </div>
            <div class="cc-side-right">
              <button class="cc-btn cc-btn--accept" data-cc="c-accept_all">
                {{acceptAllBtn}}
              </button>
              <button class="cc-btn cc-btn--reject" data-cc="c-accept_necessary">
                {{acceptNecessaryBtn}}
              </button>
              <button class="cc-btn cc-btn--settings" data-cc="c-settings">
                VIEW PREFERENCES
              </button>
            </div>
          </div>
        `,
      };
    }

    (window as any)._ccInstance = cc;

    setTimeout(() => {
      console.log("[CookieConsent][DOM] acceptAllBtn:", document.querySelector("[data-cc='c-accept_all']"));
      console.log("[CookieConsent][DOM] denyBtn:", document.querySelector("[data-cc='c-accept_necessary']"));
      console.log("[CookieConsent][DOM] settingsBtn:", document.querySelector("[data-cc='c-settings']"));
    }, 500);
  }, []);

  return null;
}
