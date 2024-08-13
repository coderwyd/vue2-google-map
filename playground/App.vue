<script setup>
import { AdvancedMarker, GoogleMap, InfoWindow } from '../src'

const center = { lat: 37.6, lng: -95.665 }
const markerOptions = { position: center, title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
const apiKey = 'AIzaSyCVn1mEVk0KZjtvjZv8pwpt2Qi2v3GzHWk'
</script>

<template>
  <GoogleMap
    map-id="DEMO_MAP_ID"
    :api-key="apiKey"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="4"
  >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions">
      <InfoWindow>
        <div id="content" style="background-color: aqua;">
          <div id="siteNotice" />
          <h1 id="firstHeading" class="firstHeading">
            Uluru
          </h1>
          <div id="bodyContent">
            <p>
              <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
              sandstone rock formation in the southern part of the
              Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
              south west of the nearest large town, Alice Springs; 450&#160;km
              (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
              features of the Uluru - Kata Tjuta National Park. Uluru is
              sacred to the Pitjantjatjara and Yankunytjatjara, the
              Aboriginal people of the area. It has many springs, waterholes,
              rock caves and ancient paintings. Uluru is listed as a World
              Heritage Site.
            </p>
            <p>
              Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                https://en.wikipedia.org/w/index.php?title=Uluru</a>
              (last visited June 22, 2009).
            </p>
          </div>
        </div>
      </InfoWindow>
    </AdvancedMarker>
  </GoogleMap>
</template>
