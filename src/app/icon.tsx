import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Medical cross */}
          <rect x="9" y="3" width="6" height="18" rx="1" fill="#0ea5e9" opacity="0.8" />
          <rect x="3" y="9" width="18" height="6" rx="1" fill="#0ea5e9" opacity="0.8" />
          {/* Dollar sign */}
          <path d="M12 7 L12 17" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 9 C10 8, 11 7.5, 12 7.5 C13 7.5, 14 8, 14 9 C14 10, 12 10.5, 12 11 C12 11, 12 12 10 12.5" stroke="#0f172a" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
