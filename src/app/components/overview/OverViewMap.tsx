"use client"
import React, { useEffect } from "react";
import styles from "./overView.module.css"
import useMediaQuary from "@/app/hooks/useMediaQuary";
import { Feature, Map as OlMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { markers } from "@/app/position";
import { Icon, Style } from "ol/style";
import "ol/ol.css";

const OverViewMap = () => {
  const { webSize } = useMediaQuary()

  useEffect(() => {
    const initializeMap = () => {

      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "./Location_icon.png",
          scale: 0.2, // 아이콘 스타일의 크기 조절
        }),
      });

      const Markers = markers.map((item, index) => {
        return new Feature({
          geometry: new Point(fromLonLat([item.lng, item.lat])),
          type: "Point",
          index: index,
          label: item.name,
        });
      });

      const featureOverlay = new VectorLayer({
        source: new VectorSource({
          features: Markers,
        }),
        style: iconStyle,
      });

      // OpenLayers Map 초기화
      new OlMap({
        target: "map1",
        layers: [
          new TileLayer({
            source: new OSM(),
          }), featureOverlay,
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

  return (
    <div className={`card ${styles.cardDefault} ${webSize === "XL" || webSize === "XXL" ? styles.cardGrid : "" } ${ webSize === "XL" || webSize === "XXL" ? styles.cardLeft : ""}`}>
      <div className="full-width">
        <div className="page-title-container">
          <h4 className="page-title">MAP</h4>
        </div>
      </div>
      <div id="map1" style={{ width: "540px", height: "500px", overflow: "hidden" }} />
    </div>
  )
};

export default OverViewMap;