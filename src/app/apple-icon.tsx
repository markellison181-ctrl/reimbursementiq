import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="3" width="6" height="18" rx="1" fill="#0ea5e9" opacity="0.8" />
          <rect x="3" y="9" width="18" height="6" rx="1" fill="#0ea5e9" opacity="0.8" />
          <path d="M12 7 L12 17" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
