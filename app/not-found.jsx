import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg-color, #f4eee2)',
      color: 'var(--color-dark, #1a1a1e)',
      fontFamily: 'Epilogue, sans-serif',
      padding: '24px',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '32px' }}>Page not found</p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: 'var(--color-black, #111)',
          color: '#fff',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 700,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
