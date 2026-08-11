import { useEffect, useRef, useState } from 'react'

function VisualAsset({ asset, className = '', imageClassName = '', children, loading = 'lazy' }) {
  const [status, setStatus] = useState('loading')
  const [isDesktop, setIsDesktop] = useState(false)
  const imageRef = useRef(null)
  const shouldPrioritize = loading === 'eager'
    || (loading === 'desktop' && isDesktop)

  useEffect(() => {
    if (loading !== 'desktop') {
      return undefined
    }

    const desktopQuery = window.matchMedia('(min-width: 900px)')
    const updateDesktopState = () => setIsDesktop(desktopQuery.matches)

    updateDesktopState()
    desktopQuery.addEventListener('change', updateDesktopState)

    return () => desktopQuery.removeEventListener('change', updateDesktopState)
  }, [loading])

  useEffect(() => {
    const image = imageRef.current

    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? 'loaded' : 'error')
    }
  }, [])

  return (
    <div
      className={`visual-asset visual-asset--${status} ${className}`.trim()}
      role={status === 'error' ? 'img' : undefined}
      aria-label={status === 'error' ? asset.placeholder : undefined}
    >
      <div className="visual-asset__fallback" aria-hidden="true">
        {children}
        <span className="visual-asset__label">{asset.placeholder}</span>
      </div>
      {status !== 'error' && (
        <img
          ref={imageRef}
          className={`visual-asset__image ${imageClassName}`.trim()}
          src={asset.src}
          srcSet={asset.srcSet}
          sizes={asset.sizes}
          width={asset.width}
          height={asset.height}
          alt={asset.alt}
          loading={shouldPrioritize ? 'eager' : 'lazy'}
          fetchPriority={shouldPrioritize ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

export default VisualAsset
