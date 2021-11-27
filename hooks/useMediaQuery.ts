// https://samuelkraft.com/blog/responsive-animation-framer-motion
// https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
import { useEffect, useState } from 'react'

// '(min-width: 480px)'
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
