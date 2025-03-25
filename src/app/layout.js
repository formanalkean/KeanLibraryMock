import '../styles/globals.css';

export const metadata = {
  title: 'Kean University Library',
  description: 'Official website for Kean University Library - Resources for research, learning, and academic success',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 