import './globals.css';

export const metadata = {
    title: 'visualsbyarul — We make advertising for you',
    description: 'visualsbyarul is a creative portfolio and freelance studio specialising in brand strategy, social media, video production, and activations.',
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
