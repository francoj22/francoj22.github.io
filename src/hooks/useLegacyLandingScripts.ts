/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import $ from "jquery";

export default function useLegacyLandingScripts() {
  useEffect(() => {
    const scriptWow = document.createElement("script");
    scriptWow.src = "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
    scriptWow.onload = () => {
      const WOW = (window as any).WOW;
      if (WOW) {
        const wow = new WOW({ live: false });
        wow.init();
      }
    };
    document.head.appendChild(scriptWow);

    $(".progress .determinate").each(function () {
      const width = $(this).text();
      $(this).css("width", width).empty().append('<i class="fa fa-circle"></i>');
    });

    const script = document.createElement("script");
    script.src = "/assets/js/init.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
}
