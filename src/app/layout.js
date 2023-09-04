import './globals.css';

export const metadata = {
  title: 'Creative Heads | Digital Agency',
  description: 'Insert CEO optimized text here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
