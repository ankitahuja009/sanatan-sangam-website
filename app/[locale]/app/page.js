'use client';

import { useEffect, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export default function AppRedirectPage() {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    // Track the QR code scan using Google Analytics
    sendGAEvent({ event: 'app_qr_scan', value: 'redirect' });

    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const iosUrl = "https://apps.apple.com/us/app/sanatan-sangam/id6760002994";
    const androidUrl = "https://play.google.com/store/apps/details?id=com.sanatansangam";
    const webUrl = "https://sanatan-sangam.com";
    const params = window.location.search;

    function appendParams(url, params) {
      if (!params) return url;
      if (url.includes("play.google.com")) {
        const referrer = encodeURIComponent(params.substring(1));
        return url + "&referrer=" + referrer;
      }
      return url + params;
    }

    let redirectUrl;
    if (/android/i.test(ua)) {
      redirectUrl = appendParams(androidUrl, params);
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      redirectUrl = appendParams(iosUrl, params);
    } else {
      redirectUrl = webUrl;
    }

    const timer = setTimeout(() => {
      window.location.replace(redirectUrl);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #FFE9C2 0%, #F8D58B 100%)',
      color: '#2A0F08',
      textAlign: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
    }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .logo { width: 88px; height: 88px; margin-bottom: 16px; animation: pulse 2s ease-in-out infinite; }
        .spinner { width: 28px; height: 28px; border: 3px solid rgba(192, 62, 0, 0.2); border-top-color: #C03E00; border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 14px; }
        .badge { background: #000; color: #fff; padding: 8px 14px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none; }
        .badges { display: flex; gap: 10px; margin-top: 20px; justify-content: center; }
        
        /* Hide global layout elements */
        header, footer, [id*="wati"] { display: none !important; }
        body { overflow: hidden; }
      `}</style>
      
      <img src="/logo.png" alt="Sanatan Sangam" className="logo" onError={(e) => e.target.style.display = 'none'} />
      <h1 style={{ fontSize: '22px', color: '#C03E00', marginBottom: '8px', fontWeight: 800 }}>🙏 Sanatan Sangam</h1>
      <p style={{ fontSize: '15px', color: '#6B1A0A', marginBottom: '4px' }}>घर बैठे करो पवित्र दर्शन</p>
      <p style={{ fontSize: '14px', color: '#C03E00', marginBottom: '24px' }}>Live Darshan from 30+ Mandirs</p>
      
      <div className="spinner"></div>
      <p style={{ fontSize: '13px', opacity: 0.8 }}>Redirecting to your app store…</p>
      
      <div style={{ marginTop: '12px' }}>
        <p style={{ fontSize: '13px' }}>Not redirected? Tap below:</p>
        <div className="badges">
          <a className="badge" href="https://play.google.com/store/apps/details?id=com.sanatansangam">▶ Google Play</a>
          <a className="badge" href="https://apps.apple.com/us/app/sanatan-sangam/id6760002994"> App Store</a>
        </div>
      </div>
    </div>
  );
}
