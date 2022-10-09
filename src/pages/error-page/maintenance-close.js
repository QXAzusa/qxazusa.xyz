import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Hello() {
  return (
    <Layout title="网站维护中" description="Maintenance Page">
    <head><meta name="robots" content="nOiNdeX, NoFolLoW" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title">网站维护中</h1>
                <p>请稍后再尝试访问，如有问题请联系网站管理员</p><p>Contact: webmaster#qxazusa.xyz（#改为@）</p>
            </div>
        </div>
    </main>
    </Layout>
  );
}