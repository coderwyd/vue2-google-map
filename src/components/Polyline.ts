import { defineComponent, toRef } from 'vue'
import { useSetupMapComponent } from '../composables/index'
import { polylineEvents } from '../shared/index'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Polyline',
  props: {
    options: {
      type: Object as PropType<google.maps.PolylineOptions>,
      required: true,
    },
  },
  emits: polylineEvents,
  setup(props, { emit }) {
    const options = toRef(props, 'options')
    const polyline = useSetupMapComponent('Polyline', polylineEvents, options, emit)

    return { polyline }
  },
  render: () => null,
})
