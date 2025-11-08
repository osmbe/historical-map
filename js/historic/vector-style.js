function getVectorTileStyle() {
  return {
    version: 8,
    sources: {
      "openmaptiles": {
        "type": "vector",
        "url": "https://tiles.openfreemap.org/planet"
      }
    },
    sprite: "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
    glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    layers: [
      {
      "id": "tunnel_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
        ["==", "brunnel", "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-dasharray": [0.5, 0.25],
        "line-width": {"base": 1.2, "stops": [[15, 1], [16, 4], [20, 11]]}
      }
    },
    {
      "id": "tunnel_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "ramp", 1], ["==", "brunnel", "tunnel"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "street", "street_limited"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "tunnel_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
      }
    },
    {
      "id": "tunnel_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
        ["==", "brunnel", "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "tunnel_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["in", "class", "path", "pedestrian"]
      ],
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-dasharray": [1, 0.75],
        "line-width": {"base": 1.2, "stops": [[14, 0.5], [20, 10]]}
      }
    },
    {
      "id": "tunnel_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
        ["==", "brunnel", "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "tunnel_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[15.5, 0], [16, 2], [20, 7.5]]}
      }
    },
    {
      "id": "tunnel_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "ramp", 1], ["==", "brunnel", "tunnel"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "tunnel_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "brunnel", "tunnel"], ["in", "class", "minor"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 11.5]]}
      }
    },
    {
      "id": "tunnel_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 10]]}
      }
    },
    {
      "id": "tunnel_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "tunnel_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
        ["==", "brunnel", "tunnel"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#ffdaa6",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "tunnel_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "brunnel", "tunnel"], ["in", "class", "rail"]],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "tunnel_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "brunnel", "tunnel"], ["==", "class", "rail"]],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "tunnel_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "tunnel_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "tunnel"],
        ["==", "class", "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "road_area_pattern",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-pattern": "pedestrian_polygon"}
    },
    {
      "id": "road_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["==", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "road_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {"base": 1.2, "stops": [[15, 1], [16, 4], [20, 11]]}
      }
    },
    {
      "id": "road_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["!in", "class", "pedestrian", "path", "track", "service", "motorway"],
        ["==", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "road_minor_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"],
        ["!=", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 20]]
        }
      }
    },
    {
      "id": "road_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"],
        ["!=", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
      }
    },
    {
      "id": "road_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "road_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["!=", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "road_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "path", "pedestrian"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-dasharray": [1, 0.7],
        "line-width": {"base": 1.2, "stops": [[14, 1], [20, 10]]}
      }
    },
    {
      "id": "road_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["==", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "road_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[15.5, 0], [16, 2], [20, 7.5]]}
      }
    },
    {
      "id": "road_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "ramp", 1],
        ["!in", "class", "pedestrian", "path", "track", "service", "motorway"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "road_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 18]]}
      }
    },
    {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "rgba(221, 186, 45, 1)",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [8, 0.5], [20, 13]]}
      }
    },
    {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "rgba(165, 143, 51, 1)",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "road_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["!=", "ramp", 1]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "rgba(132, 90, 33, 1)",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "road_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "rail"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "road_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "rail"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "road_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "road_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "transit"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "road_one_way_arrow",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": ["==", "oneway", 1],
      "layout": {"icon-image": "arrow", "symbol-placement": "line"}
    },
    {
      "id": "road_one_way_arrow_opposite",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 16,
      "filter": ["==", "oneway", -1],
      "layout": {
        "icon-image": "arrow",
        "symbol-placement": "line",
        "icon-rotate": 180
      }
    },
    {
      "id": "bridge_motorway_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
        ["==", "brunnel", "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "bridge_service_track_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#cfcdca",
        "line-width": {"base": 1.2, "stops": [[15, 1], [16, 4], [20, 11]]}
      }
    },
    {
      "id": "bridge_link_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "class", "link"], ["==", "brunnel", "bridge"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
        }
      }
    },
    {
      "id": "bridge_street_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "street", "street_limited"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "hsl(36, 6%, 74%)",
        "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
        "line-width": {
          "base": 1.2,
          "stops": [[12, 0.5], [13, 1], [14, 4], [20, 25]]
        }
      }
    },
    {
      "id": "bridge_path_pedestrian_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "path", "pedestrian"]
      ],
      "paint": {
        "line-color": "hsl(35, 6%, 80%)",
        "line-dasharray": [1, 0],
        "line-width": {"base": 1.2, "stops": [[14, 1.5], [20, 18]]}
      }
    },
    {
      "id": "bridge_secondary_tertiary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
      }
    },
    {
      "id": "bridge_trunk_primary_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "bridge_motorway_casing",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
        ["==", "brunnel", "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [[5, 0.4], [6, 0.7], [7, 1.75], [20, 22]]
        }
      }
    },
    {
      "id": "bridge_path_pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "path", "pedestrian"]
      ],
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-dasharray": [1, 0.3],
        "line-width": {"base": 1.2, "stops": [[14, 0.5], [20, 10]]}
      }
    },
    {
      "id": "bridge_motorway_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
        ["==", "brunnel", "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "bridge_service_track",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "service", "track"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[15.5, 0], [16, 2], [20, 7.5]]}
      }
    },
    {
      "id": "bridge_link",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "class", "link"], ["==", "brunnel", "bridge"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
        }
      }
    },
    {
      "id": "bridge_street",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "brunnel", "bridge"], ["in", "class", "minor"]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fff",
        "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 18]]}
      }
    },
    {
      "id": "bridge_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fea",
        "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 10]]}
      }
    },
    {
      "id": "bridge_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "trunk"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "rgba(167, 142, 42, 1)",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "bridge_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
        ["==", "brunnel", "bridge"]
      ],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#fc8",
        "line-width": {"base": 1.2, "stops": [[5, 0], [7, 1], [20, 18]]}
      }
    },
    {
      "id": "bridge_major_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "class", "rail"], ["==", "brunnel", "bridge"]],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "bridge_major_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "class", "rail"], ["==", "brunnel", "bridge"]],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "bridge_transit_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "transit"],
        ["==", "brunnel", "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
      }
    },
    {
      "id": "bridge_transit_rail_hatching",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "transit"],
        ["==", "brunnel", "bridge"]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
      }
    },
    {
      "id": "boundary_3",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 8,
      "filter": ["all", ["in", "admin_level", 3, 4]],
      "layout": {"line-join": "round"},
      "paint": {
        "line-color": "#9e9cab",
        "line-dasharray": [5, 1],
        "line-width": {"base": 1, "stops": [[4, 0.4], [5, 1], [12, 1.8]]}
      }
    },
    {
      "id": "boundary_2_z0-4",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "maxzoom": 5,
      "filter": ["all", ["==", "admin_level", 2], ["!has", "claimed_by"]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(248, 1%, 41%)",
        "line-opacity": {"base": 1, "stops": [[0, 0.4], [4, 1]]},
        "line-width": {"base": 1, "stops": [[3, 1], [5, 1.2], [12, 3]]}
      }
    },
    {
      "id": "boundary_2_z5-",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": ["all", ["==", "admin_level", 2]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(248, 1%, 41%)",
        "line-opacity": {"base": 1, "stops": [[0, 0.4], [4, 1]]},
        "line-width": {"base": 1, "stops": [[3, 1], [5, 1.2], [12, 3]]}
      }
    },
    {
      "id": "road_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "filter": ["all"],
      "layout": {
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{name}",
        "text-offset": [0, 0.15],
        "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
      },
      "paint": {
        "text-color": "#765",
        "text-halo-blur": 0.5,
        "text-halo-width": 1
      }
    },
    {
      "id": "road_shield",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": ["all", ["<=", "ref_length", 6]],
      "layout": {
        "icon-image": "default_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-placement": {"base": 1, "stops": [[10, "point"], [11, "line"]]},
        "symbol-spacing": 500,
        "text-field": "{ref}",
        "text-offset": [0, 0.1],
        "text-rotation-alignment": "viewport",
        "text-size": 10,
        "icon-size": 0.8
      }
    },
    {
      "id": "state",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 6,
      "filter": ["all", ["==", "class", "state"]],
      "layout": {
        "text-field": "{name_en}",
        "text-size": {"stops": [[4, 11], [6, 15]]},
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#633",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_3",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": ["all", [">=", "rank", 3], ["==", "class", "country"]],
      "layout": {
        "text-field": "{name_en}",
        "text-max-width": 6.25,
        "text-size": {"stops": [[3, 11], [7, 17]]},
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": ["all", ["==", "rank", 2], ["==", "class", "country"]],
      "layout": {
        "text-field": "{name_en}",
        "text-max-width": 6.25,
        "text-size": {"stops": [[2, 11], [5, 17]]},
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": ["all", ["==", "rank", 1], ["==", "class", "country"]],
      "layout": {
        "text-field": "{name_en}",
        "text-max-width": 6.25,
        "text-size": {"stops": [[1, 11], [4, 17]]},
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1
      }
    },
    {
      "id": "continent",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 1,
      "filter": ["all", ["==", "class", "continent"]],
      "layout": {
        "text-field": "{name_en}",
        "text-size": 13,
        "text-transform": "uppercase",
        "text-justify": "center"
      },
      "paint": {
        "text-color": "#633",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1
      }
    }
    ]
  };
}