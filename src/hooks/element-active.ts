import { breakpointsTailwind, useBreakpoints, useElementHover, useMousePressed } from '@vueuse/core'

export function useElementActive(activeRef: HTMLElement) {
  const isHovered = useElementHover(activeRef)

  const { pressed } = useMousePressed({ target: activeRef })

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const sm = breakpoints.smaller('sm')

  const activeState = computed(() => (sm.value ? pressed.value : isHovered.value))

  return {
    activeState: readonly(activeState),
  }
}
