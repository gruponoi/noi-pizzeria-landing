import { useState } from 'react'

function VisualAsset({ asset, className = '', imageClassName = '', children, eager = false }) {
  const [status, setStatus] = useState('loading')

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
          alt={asset.alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

export default VisualAsset
