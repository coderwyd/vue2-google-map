import { defineComponent, toRef } from 'vue'
import { useSetupMapComponent } from '../composables/index'
import { polylineEvents } from '../shared/index'
import type { PropType } from 'vue'

const rectangleEvents = polylineEvents.concat(['bounds_changed'])

export default defineComponent({
  name: 'Rectangle',
  props: {
    options: {
      type: Object as PropType<google.maps.RectangleOptions>,
      required: true,
    },
  },
  emits: rectangleEvents,
  setup(props, { emit }) {
    const options = toRef(props, 'options')
    const rectangle = useSetupMapComponent('Rectangle', rectangleEvents, options, emit)

    return { rectangle }
  },
  render: () => null,
})
