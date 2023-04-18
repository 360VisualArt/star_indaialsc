(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Image_82233EC8_95DD_387D_41C3_650D05E9F1C5"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "definitions": [{
 "initialPosition": {
  "yaw": 173.39,
  "class": "PanoramaCameraPosition",
  "pitch": -10.29
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A5B6087_9614_12D0_41E0_F1DEF2966988",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -103.59,
  "class": "PanoramaCameraPosition",
  "pitch": -8.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A7380B4_9614_1230_41D4_C75E70A72C61",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_99A805CF_95A7_6874_4166_A06956D3386A",
   "camera": "this.panorama_99A805CF_95A7_6874_4166_A06956D3386A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341",
   "camera": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1",
   "camera": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464",
   "camera": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6",
   "camera": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69",
   "camera": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC",
   "camera": "this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2",
   "camera": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C",
   "camera": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -142.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A4E209D_9614_12F0_41E2_6D9660880380",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -105.06,
  "class": "PanoramaCameraPosition",
  "pitch": -12.49
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A6AA0E0_9614_1250_41C1_3A9680F641F7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": -99.92,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A51106D_9614_1250_41B9_28C1E48EBA05",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 04",
 "hfovMin": "135%",
 "id": "panorama_9EF7CA46_95A5_1875_41E0_0912168FB464",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9AF337EB_95A5_283C_41C8_EA1DCDCED8F8",
  "this.overlay_9A1C95ED_95A7_2837_41CF_8E8805B682C9"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 09",
 "hfovMin": "135%",
 "id": "panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_87F87FC6_95BD_7875_41A6_0ABB7F87734F",
  "this.overlay_87DA0C40_95BD_186C_41C0_5D3DAE3DA6B5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 02",
 "hfovMin": "135%",
 "id": "panorama_9EF2973F_95A7_2813_41E1_08F6195DD341",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9BED15D1_95AD_286C_41BD_D46E85C34B57",
  "this.overlay_9BCEDFE5_95AB_3836_419F_6141D0E33538"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99A805CF_95A7_6874_4166_A06956D3386A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 07",
 "hfovMin": "135%",
 "id": "panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_841B9E39_95BD_181F_41A4_753B3E9CDE05"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 05",
 "hfovMin": "135%",
 "id": "panorama_9E275BB9_95A5_781C_41DC_826C953A18B6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_85FA0376_95A5_2814_41C5_7AC9A8611CD4",
  "this.overlay_85C54147_95A5_E873_41BC_A91B514867F0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 10",
 "hfovMin": "135%",
 "id": "panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382",
 "class": "Panorama",
 "overlays": [
  "this.overlay_86A5EE6E_95BB_1834_41CB_97CEB8A9EAF8"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 166.04,
  "class": "PanoramaCameraPosition",
  "pitch": -17.63
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A25C03D_9614_1230_41C6_2BD20C79C18C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_99A805CF_95A7_6874_4166_A06956D3386A",
   "camera": "this.panorama_99A805CF_95A7_6874_4166_A06956D3386A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341",
   "camera": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1",
   "camera": "this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464",
   "camera": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6",
   "camera": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69",
   "camera": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC",
   "camera": "this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2",
   "camera": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C",
   "camera": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382",
   "camera": "this.panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 03",
 "hfovMin": "135%",
 "id": "panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9B503B83_95AA_F8EC_41B8_249B590501C9",
  "this.overlay_9A9A3915_95A5_3816_41D3_7C145EF0D7F1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 08",
 "hfovMin": "135%",
 "id": "panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_846F8FF9_95BF_381F_41B8_DD39198ECFC4",
  "this.overlay_87A8D0A0_95BF_682C_41A8_ABA928355567"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 01",
 "hfovMin": "135%",
 "id": "panorama_99A805CF_95A7_6874_4166_A06956D3386A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9859988E_95AD_18F4_41A9_EA11BFAE0521"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A32C026_9614_11D0_41CF_0AA92683C225",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 06",
 "hfovMin": "135%",
 "id": "panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69",
 "class": "Panorama",
 "overlays": [
  "this.overlay_852C5170_95BB_282C_41C5_1659A1D18AA1",
  "this.overlay_850B7CB8_95BB_181D_41D3_8AFBDC326D11",
  "this.overlay_855ADBE3_95BB_F833_41D5_B1F1929727DC"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A08600D_9614_11D0_41AD_74D49E303778",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A2E4055_9614_1270_41D9_681C7A4F7857",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -15.43
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A66F0CA_9614_1250_4199_3FBEDED5D6B9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_99A805CF_95A7_6874_4166_A06956D3386A_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 95.51,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A9E90F7_9614_1230_41A3_2BF0CE32CE9B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 98.45,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_9A06BFF3_9614_0E30_41E1_8A3513098306",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingBottom": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "maxHeight": 275,
 "horizontalAlign": "center",
 "id": "Image_82233EC8_95DD_387D_41C3_650D05E9F1C5",
 "backgroundOpacity": 0,
 "width": "14.144%",
 "right": "1.33%",
 "borderRadius": 0,
 "url": "skin/Image_82233EC8_95DD_387D_41C3_650D05E9F1C5.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "3.81%",
 "minWidth": 1,
 "height": "7.725%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image14871"
 },
 "maxWidth": 842
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 85.39,
   "hfov": 25.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6, this.camera_9A32C026_9614_11D0_41CF_0AA92683C225); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AAE30F_95AB_29F3_41D2_C9A59A6EA0F2",
   "pitch": -27.82,
   "yaw": 85.39,
   "hfov": 25.08,
   "distance": 100
  }
 ],
 "id": "overlay_9AF337EB_95A5_283C_41C8_EA1DCDCED8F8",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.09,
   "hfov": 24.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1, this.camera_9A25C03D_9614_1230_41C6_2BD20C79C18C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AA9310_95AB_29ED_41C2_7C1C5B9ED5BC",
   "pitch": -29.87,
   "yaw": -175.09,
   "hfov": 24.59,
   "distance": 100
  }
 ],
 "id": "overlay_9A1C95ED_95A7_2837_41CF_8E8805B682C9",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.73,
   "hfov": 25.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AD9315_95AB_2817_41DB_38F932BD9191",
   "pitch": -25.07,
   "yaw": -11.73,
   "hfov": 25.69,
   "distance": 100
  }
 ],
 "id": "overlay_87F87FC6_95BD_7875_41A6_0ABB7F87734F",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 100.15,
   "hfov": 26.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2, this.camera_9A06BFF3_9614_0E30_41E1_8A3513098306); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AE3316_95AB_2815_41C0_4F74CC667723",
   "pitch": -23.35,
   "yaw": 100.15,
   "hfov": 26.03,
   "distance": 100
  }
 ],
 "id": "overlay_87DA0C40_95BD_186C_41C0_5D3DAE3DA6B5",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.21,
   "hfov": 25.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83A9F30C_95AB_29F5_41D6_5F51C3B159CA",
   "pitch": -25.07,
   "yaw": -5.21,
   "hfov": 25.69,
   "distance": 100
  }
 ],
 "id": "overlay_9BED15D1_95AD_286C_41BD_D46E85C34B57",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 167.07,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_99A805CF_95A7_6874_4166_A06956D3386A, this.camera_9A08600D_9614_11D0_41AD_74D49E303778); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83A9D30D_95AB_29F7_41D7_219B7908129A",
   "pitch": -21.29,
   "yaw": 167.07,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_9BCEDFE5_95AB_3836_419F_6141D0E33538",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 93.97,
   "hfov": 24.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69, this.camera_9A9E90F7_9614_1230_41A3_2BF0CE32CE9B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AC9313_95AB_2813_41D5_FAA5B1605B73",
   "pitch": -30.56,
   "yaw": 93.97,
   "hfov": 24.42,
   "distance": 100
  }
 ],
 "id": "overlay_841B9E39_95BD_181F_41A4_753B3E9CDE05",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.73,
   "hfov": 25.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AB3311_95AB_29EC_41B2_B108126FAB81",
   "pitch": -25.07,
   "yaw": -11.73,
   "hfov": 25.69,
   "distance": 100
  }
 ],
 "id": "overlay_85FA0376_95A5_2814_41C5_7AC9A8611CD4",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -95.47,
   "hfov": 23.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9EF7CA46_95A5_1875_41E0_0912168FB464, this.camera_9A7380B4_9614_1230_41D4_C75E70A72C61); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83ABD311_95AB_29EF_41C4_CA4652C4C768",
   "pitch": -32.28,
   "yaw": -95.47,
   "hfov": 23.98,
   "distance": 100
  }
 ],
 "id": "overlay_85C54147_95A5_E873_41BC_A91B514867F0",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.21,
   "hfov": 25.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C, this.camera_9A4E209D_9614_12F0_41E2_6D9660880380); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AD7317_95AB_2813_41D2_4B8ADC1C3CDC",
   "pitch": -27.82,
   "yaw": 172.21,
   "hfov": 25.08,
   "distance": 100
  }
 ],
 "id": "overlay_86A5EE6E_95BB_1834_41CB_97CEB8A9EAF8",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.28,
   "hfov": 24.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.87
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AA730D_95AB_29F7_41CF_7EA81729D889",
   "pitch": -29.87,
   "yaw": 0.28,
   "hfov": 24.59,
   "distance": 100
  }
 ],
 "id": "overlay_9B503B83_95AA_F8EC_41B8_249B590501C9",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.98,
   "hfov": 25.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.13
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9EF2973F_95A7_2813_41E1_08F6195DD341, this.camera_9A2E4055_9614_1270_41D9_681C7A4F7857); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AA230F_95AB_29F3_41D7_B9C43BD27F55",
   "pitch": -27.13,
   "yaw": 163.98,
   "hfov": 25.24,
   "distance": 100
  }
 ],
 "id": "overlay_9A9A3915_95A5_3816_41D3_7C145EF0D7F1",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.55,
   "hfov": 25.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.79
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C, this.camera_9A51106D_9614_1250_41B9_28C1E48EBA05); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AD5314_95AB_2815_41E1_87F4C7A74F8C",
   "pitch": -26.79,
   "yaw": -86.55,
   "hfov": 25.31,
   "distance": 100
  }
 ],
 "id": "overlay_846F8FF9_95BF_381F_41B8_DD39198ECFC4",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 173.24,
   "hfov": 24.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69, this.camera_9A5B6087_9614_12D0_41E0_F1DEF2966988); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83ADD315_95AB_2817_41CB_38188C3A785B",
   "pitch": -30.22,
   "yaw": 173.24,
   "hfov": 24.5,
   "distance": 100
  }
 ],
 "id": "overlay_87A8D0A0_95BF_682C_41A8_ABA928355567",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.73,
   "hfov": 25.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83A8A309_95AB_29FF_41D1_DED91CC5D183",
   "pitch": -25.07,
   "yaw": -11.73,
   "hfov": 25.69,
   "distance": 100
  }
 ],
 "id": "overlay_9859988E_95AD_18F4_41A9_EA11BFAE0521",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.7,
   "hfov": 23.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.28
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83ABA311_95AB_29EF_41D0_FAB224052664",
   "pitch": -32.28,
   "yaw": -10.7,
   "hfov": 23.98,
   "distance": 100
  }
 ],
 "id": "overlay_852C5170_95BB_282C_41C5_1659A1D18AA1",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.53,
   "hfov": 23.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC, this.camera_9A6AA0E0_9614_1250_41C1_3A9680F641F7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83AC4312_95AB_29ED_41B9_40527D621321",
   "pitch": -35.02,
   "yaw": -97.53,
   "hfov": 23.22,
   "distance": 100
  }
 ],
 "id": "overlay_850B7CB8_95BB_181D_41D3_8AFBDC326D11",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.35,
   "hfov": 23.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.65
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E275BB9_95A5_781C_41DC_826C953A18B6, this.camera_9A66F0CA_9614_1250_4199_3FBEDED5D6B9); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_83ACF313_95AB_2813_41D5_D802FA1F6CD8",
   "pitch": -33.65,
   "yaw": 165.35,
   "hfov": 23.61,
   "distance": 100
  }
 ],
 "id": "overlay_855ADBE3_95BB_F833_41D5_B1F1929727DC",
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_83038896_95DB_1815_41E2_5141BC919F02"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 40,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 40,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "vertical"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AAE30F_95AB_29F3_41D2_C9A59A6EA0F2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF7CA46_95A5_1875_41E0_0912168FB464_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AA9310_95AB_29ED_41C2_7C1C5B9ED5BC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AD9315_95AB_2817_41DB_38F932BD9191",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9ED4FFA9_95AA_F83C_41B5_3BB9BB64896C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AE3316_95AB_2815_41C0_4F74CC667723",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83A9F30C_95AB_29F5_41D6_5F51C3B159CA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF2973F_95A7_2813_41E1_08F6195DD341_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83A9D30D_95AB_29F7_41D7_219B7908129A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9ED47DA5_95A5_3834_41D1_FF0D1A419DBC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AC9313_95AB_2813_41D5_FAA5B1605B73",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AB3311_95AB_29EC_41B2_B108126FAB81",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E275BB9_95A5_781C_41DC_826C953A18B6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83ABD311_95AB_29EF_41C4_CA4652C4C768",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF981E7_95AB_6833_41CA_D53DEB70C382_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AD7317_95AB_2813_41D2_4B8ADC1C3CDC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AA730D_95AB_29F7_41CF_7EA81729D889",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E24F951_95A7_386F_41C3_AB3BAB6F61A1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AA230F_95AB_29F3_41D7_B9C43BD27F55",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AD5314_95AB_2815_41E1_87F4C7A74F8C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF68EF8_95A5_181D_41D0_092015F2C8B2_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83ADD315_95AB_2817_41CB_38188C3A785B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_99A805CF_95A7_6874_4166_A06956D3386A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83A8A309_95AB_29FF_41D1_DED91CC5D183",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83ABA311_95AB_29EF_41D0_FAB224052664",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83AC4312_95AB_29ED_41B9_40527D621321",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9EF67CFD_95A5_1817_41BA_10E44C483A69_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_83ACF313_95AB_2813_41D5_D802FA1F6CD8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "layout": "absolute"
},
{
 "maxHeight": 80,
 "horizontalAlign": "center",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "bottom",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "height": "26.316%",
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "maxHeight": 275,
 "horizontalAlign": "center",
 "id": "Image_83038896_95DB_1815_41E2_5141BC919F02",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_83038896_95DB_1815_41E2_5141BC919F02.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "19.225%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image14707"
 },
 "maxWidth": 842
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 140,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "layout": "absolute"
},
{
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "propagateClick": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "paddingRight": 70,
 "itemOpacity": 1,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "borderSize": 0,
 "itemPaddingRight": 3,
 "shadow": false,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemMode": "normal",
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "paddingBottom": 70,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://www.instagram.com/starindaial/', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Instagram",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://www.facebook.com/starindaial/', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Facebook",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5547996888520&text=Ol%C3%A1!%20Vim%20pelo%20Tour%20Virtual%20do%20Google%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Whatsapp 1",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5547992368308&text=Ol%C3%A1!%20Vim%20pelo%20Tour%20Virtual%20do%20Google%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Whatsapp 2",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('tel:04733808981', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Telefone",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://goo.gl/maps/V8RXeeQpFnZTvb1h9', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 50,
 "fontSize": "37px",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "label": "Localiza\u00e7\u00e3o",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingLeft": 10,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 1,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": 2,
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "layout": "horizontal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 78,
 "class": "HTMLText",
 "paddingTop": 0,
 "click": "this.openLink('https://goo.gl/maps/V8RXeeQpFnZTvb1h9', '_blank')",
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:17px;font-family:'Oswald Regular';\"><I>Star Prote\u00e7\u00e3o Veicular Indaial</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Av. Manoel Sim\u00e3o, 390 </I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Na\u00e7\u00f5es</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Indaial - SC</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "maxHeight": 80,
 "horizontalAlign": "center",
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "class": "IconButton",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "horizontalAlign": "center",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "horizontalAlign": "right",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
