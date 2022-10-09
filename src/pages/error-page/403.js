import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Hello() {
  return (
    <Layout title="403 Forbidden" description="403 Page">
    <head><meta name="robots" content="nOiNdeX, NoFolLoW" /></head>
    <main class="container margin-vert--xl">
        <div class="row">
            <div class="col col--6 col--offset-3">
                <h1 class="hero__title">403 Forbidden</h1>
                <p>您没有足够的权限访问该资源，如有疑问请联系网站管理员</p><p>Contact: webmaster#qxazusa.xyz（#改为@）</p>
            </div>
        </div>
    </main>
    </Layout>
  );
}