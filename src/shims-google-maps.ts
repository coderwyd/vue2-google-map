import type { createCustomMarkerClass } from './utils'

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace google.maps {
    interface CustomMarkerOptions {
      position?: google.maps.MarkerOptions['position']
      map?: google.maps.Map | google.maps.StreetViewPanorama | null
      anchorPoint?:
        | 'CENTER'
        | 'TOP_CENTER'
        | 'BOTTOM_CENTER'
        | 'LEFT_CENTER'
        | 'RIGHT_CENTER'
        | 'TOP_LEFT'
        | 'TOP_RIGHT'
        | 'BOTTOM_LEFT'
        | 'BOTTOM_RIGHT'
      offsetX?: number
      offsetY?: number
      zIndex?: number | null
    }

    // eslint-disable-next-line import/no-mutable-exports
    export let CustomMarker: ReturnType<typeof createCustomMarkerClass>
  }
}
