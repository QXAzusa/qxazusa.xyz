import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Hello() {
    return (
        <Layout title="敬请期待" description="Contact Page">
            <head><meta name="robots" content="noindex, nofollow" /></head>
            <main class="container margin-vert--xl">
                <div class="row">
                    <div class="col col--6 col--offset-3">
                        <h1 class="hero__title">相册</h1>
                        <h1 class="hero__subtitle">敬请期待</h1>
                        <h1 class="hero__subtitle">To be continued...</h1>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
