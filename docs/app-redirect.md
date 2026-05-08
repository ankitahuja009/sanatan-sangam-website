# App Store Redirect Documentation

## Overview
A smart device-detecting redirect page has been added at `/app` on the `sanatan-sangam.com` website. 

When users visit `https://sanatan-sangam.com/app` (e.g., from a QR code):
- **iOS devices** will be redirected to the Apple App Store.
- **Android devices** will be redirected to the Google Play Store, preserving and forwarding UTM parameters via the `referrer` parameter.
- **Desktop/Unknown devices** will stay on the fallback page briefly and then redirect to the homepage (`https://sanatan-sangam.com`).

## Technical Implementation Details
- Since this project uses `next-intl` App Router with `localePrefix: 'as-needed'`, the default unlocalized path `/app` is internally rewritten to `/en/app`.
- To avoid 404 errors and layout conflicts without modifying the global `middleware.js`, the redirect page is placed at `app/[locale]/app/page.js`.
- The global layout (header, footer) is visually hidden on this route using scoped CSS so the page remains a full-screen, standalone experience.
- The `og-image.jpg` was generated from the existing logo and is located in the `/public` directory.

## Updating Destination URLs
If you ever need to change the App Store or Play Store URLs, edit `app/[locale]/app/page.js`:

```javascript
// Locate these lines inside the useEffect hook:
const iosUrl = "https://apps.apple.com/us/app/sanatan-sangam/id6760002994";
const androidUrl = "https://play.google.com/store/apps/details?id=com.sanatansangam";
```

## Verifying Firebase `first_open` Events
To verify the tracking:
1. Uninstall the app from your Android test device.
2. Scan a QR code pointing to `https://sanatan-sangam.com/app?utm_source=photobooth&utm_medium=offline&utm_campaign=event_generic`.
3. The redirect will automatically append `&referrer=utm_source%3Dphotobooth%26utm_medium%3Doffline%26utm_campaign%3Devent_generic` to the Play Store URL.
4. Install the app.
5. Open the app for the first time. The Google Play Install Referrer API will pass the parameters to Firebase Analytics.
6. In your Firebase Analytics dashboard, look for `first_open` events and check the `source`, `medium`, and `campaign` dimensions. They should reflect `photobooth`, `offline`, and `event_generic`.

## Deployment Steps
- **Host**: Vercel
- **Deploy Command**: 
  Commit and push the changes to your main branch (e.g., `git add .`, `git commit -m "feat: add smart app redirect"`, `git push origin main`). Vercel will automatically trigger a deployment.
  If you are deploying manually, you can run `npm run build` locally to verify, followed by `vercel --prod` using the Vercel CLI.
