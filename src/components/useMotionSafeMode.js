import { useSyncExternalStore } from 'react'
import { useReducedMotion } from 'framer-motion'

const TOUCH_QUERY = '(max-width: 767px), (hover: none) and (pointer: coarse)'

function subscribe(onStoreChange) {
  const mediaQuery = window.matchMedia(TOUCH_QUERY)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => mediaQuery.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(TOUCH_QUERY).matches
}

function getServerSnapshot() {
  return false
}

/** Scroll effects are decorative; touch devices keep content static and stable. */
export default function useMotionSafeMode() {
  const prefersReducedMotion = useReducedMotion()
  const isTouchViewport = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  return prefersReducedMotion || isTouchViewport
}
