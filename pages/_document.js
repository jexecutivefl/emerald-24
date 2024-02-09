import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Search Console Verification Meta Tag */}
                <meta name="google-site-verification" content="your_verification_code_here" />

                {/* You can add other meta tags or links here as needed */}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
