var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1",
      "name": "Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4584930974898427,
          "pitch": 0.5340284041855021,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6854740361133693,
          "pitch": 0.0787589728281457,
          "title": "living&nbsp;",
          "text": "living conctado con la cocina"
        }
      ]
    },
    {
      "id": "1-panorama2",
      "name": "Panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1987997543076201,
          "pitch": 0.4545152395491776,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.637265305934763,
          "pitch": 0.30869760238597976,
          "title": "cocina&nbsp;",
          "text": "cocina con muebles de caoba hechos a medida&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
