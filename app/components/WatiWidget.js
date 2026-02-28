'use client';
import { useEffect } from 'react';

export default function WatiWidget() {
    useEffect(() => {
        const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?38102';
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        const options = {
            enabled: true,
            chatButtonSetting: {
                backgroundColor: '#00e785',
                ctaText: 'Chat with us',
                borderRadius: '25',
                marginLeft: '0',
                marginRight: '20',
                marginBottom: '20',
                ctaIconWATI: false,
                position: 'right',
            },
            brandSetting: {
                brandName: 'Sanatan Sangam',
                brandSubTitle: 'Where Sanatan Meets You',
                brandImg:
                    'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png',
                welcomeText: 'Namaste!\nHow can I help you?',
                messageText: 'Hello, %0A I have a question about {{page_link}}',
                backgroundColor: '#00e785',
                ctaText: 'Chat with us',
                borderRadius: '25',
                autoShow: false,
                phoneNumber: '9711521199',
            },
        };
        s.onload = function () {
            if (typeof window !== 'undefined' && window.CreateWhatsappChatWidget) {
                window.CreateWhatsappChatWidget(options);
            }
        };
        const x = document.getElementsByTagName('script')[0];
        if (x && x.parentNode) {
            x.parentNode.insertBefore(s, x);
        }

        return () => {
            // Cleanup on unmount
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
        };
    }, []);

    return null;
}
