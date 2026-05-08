export const metadata = {
  title: "Download Sanatan Sangam — Live Darshan App",
  description: "Free live darshan from 30+ mandirs. Download Sanatan Sangam on Google Play or App Store.",
  openGraph: {
    title: "Sanatan Sangam — Live Darshan",
    description: "घर बैठे करो पवित्र दर्शन 🙏 Free live darshan from 30+ mandirs.",
    url: "https://sanatan-sangam.com/app",
    type: "website",
    images: [
      {
        url: "https://sanatan-sangam.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanatan Sangam App",
      },
    ],
  },
};

export default function AppRedirectLayout({ children }) {
  return <>{children}</>;
}
