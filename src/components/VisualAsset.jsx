import { useState } from 'react'

function VisualAsset({ asset, className = '', imageClassName = '', children, loading = 'lazy' }) {
  const [status, setStatus] = useState('loading')
  const shouldPrioritize = loading === 'eager'
    || (loading === 'desktop' && typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches)

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
