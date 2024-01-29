"use client"
import React, { useEffect } from "react";

import "ol/ol.css"; //스타일
import { Map as OlMap, View } from "ol"; //뷰 관리
import { Tile as TileLayer } from "ol/layer"; //지도타일
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";


export default function SatMap() {

  useEffect(() => {
    const initializeMap = () => {
      // OpenLayers Map 초기화
      new OlMap({
        target: "vmap",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          projection: "EPSG:3857",
          center: transform([127.67449, 36.399426], "EPSG:4326", "EPSG:3857"),
          zoom: 7,
        }),
      });
    };

    const loadScripts = () => {
      const script1 = document.createElement("script");
      script1.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL";
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://map.ngii.go.kr/openapi/wmts_ngiiMap_v6.4.3.js?apikey=0D494EE250CAEC915C5DC75684D52493";
      script2.async = true;
      script2.onload = initializeMap;
      document.head.appendChild(script2);
    };

    loadScripts();
  }, []);

  return <div id="vmap" style={{ height: "500px", width: "100%", overflow: "hidden" }} />;
}