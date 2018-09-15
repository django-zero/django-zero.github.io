/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5fb9988a9d876b691bc20985b8d7b039"
  },
  {
    "url": "assets/css/0.styles.f9d02314.css",
    "revision": "58f0e3ed443fb47b49e5a31ed9573fa3"
  },
  {
    "url": "assets/img/hello-world.6d208db7.png",
    "revision": "6d208db7998b7f05dee781aace4eb118"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a98bcca7.js",
    "revision": "967c29ab1081f52f3ef2d410a6220986"
  },
  {
    "url": "assets/js/11.8bf27756.js",
    "revision": "ac64db2d69f8a0b570d32ab066ba1a7e"
  },
  {
    "url": "assets/js/12.6159eee5.js",
    "revision": "b9108d3bd9abcf610a2f0065bc2b6af3"
  },
  {
    "url": "assets/js/13.b931cd6c.js",
    "revision": "833873896e5bd3eabcb16d7d1fcbbb73"
  },
  {
    "url": "assets/js/14.828eea02.js",
    "revision": "9c04317ee66f786c8d252d8fe3b4a543"
  },
  {
    "url": "assets/js/15.38fc5c3c.js",
    "revision": "7e26c536d456185cadbbb23845206a8e"
  },
  {
    "url": "assets/js/16.dbeb3f36.js",
    "revision": "a686416ac1d35424f1586c9fe218af20"
  },
  {
    "url": "assets/js/17.97fc3fa4.js",
    "revision": "84bc0fc3ab01091ba8b49cc45b2d1620"
  },
  {
    "url": "assets/js/18.e085c4aa.js",
    "revision": "84334f4b6b86ea66f488a92ff8f05746"
  },
  {
    "url": "assets/js/19.7821b952.js",
    "revision": "8d770a5d7ba47bd767366932110b648a"
  },
  {
    "url": "assets/js/2.798e7f11.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.423c6321.js",
    "revision": "adc0deb74686d9c641baf9dedb076d98"
  },
  {
    "url": "assets/js/21.fbf1bfee.js",
    "revision": "763374e773a18df621b411bf27f206cb"
  },
  {
    "url": "assets/js/22.a4c4bf41.js",
    "revision": "aa3a61ee2918f5a29b4cb0a53020bdea"
  },
  {
    "url": "assets/js/23.314af9d1.js",
    "revision": "f135c1557ba7734f4e180f70863ca4f6"
  },
  {
    "url": "assets/js/24.750d598e.js",
    "revision": "afdf42d08afaf9cdfa3ba950b00a0411"
  },
  {
    "url": "assets/js/25.6188d65e.js",
    "revision": "03fb915fd4d5e387c3fffec2cca2e5c6"
  },
  {
    "url": "assets/js/26.5d73e3eb.js",
    "revision": "e0b9aa8e63b05b6f16ce241e35ae8e42"
  },
  {
    "url": "assets/js/27.df401612.js",
    "revision": "d39d850a92ee48899fc5ca5409672432"
  },
  {
    "url": "assets/js/28.ccaa7385.js",
    "revision": "5512f0122addc9ec1a3de0e2300b3a08"
  },
  {
    "url": "assets/js/29.1d0d1f43.js",
    "revision": "13797ff9d354020ecd8f60a3046079fa"
  },
  {
    "url": "assets/js/3.a1b6b1bb.js",
    "revision": "accf8452df8ae83e80b47cd9a9ce854d"
  },
  {
    "url": "assets/js/30.43fffbdb.js",
    "revision": "cb0caec5af540aa0d955c978a9274a3f"
  },
  {
    "url": "assets/js/31.2f1a6f31.js",
    "revision": "49424e1709a5d56461951e4c25885f0b"
  },
  {
    "url": "assets/js/32.2aa653b1.js",
    "revision": "1831edca799e8ec8223e1f63598cb75d"
  },
  {
    "url": "assets/js/33.62398bde.js",
    "revision": "2d9cd57ee81ac47745bee11455785055"
  },
  {
    "url": "assets/js/34.0b2d19cc.js",
    "revision": "59a60b5465e1ca2621eebd53aa65af80"
  },
  {
    "url": "assets/js/35.b581a9a1.js",
    "revision": "2e795f6c68e73c8f9d2af5fbbcb98679"
  },
  {
    "url": "assets/js/4.ce66a226.js",
    "revision": "7030c872a0668cf7c2977273ba2f45ec"
  },
  {
    "url": "assets/js/5.a5bd87df.js",
    "revision": "9858be2f41b7fe24c7e41d868a970499"
  },
  {
    "url": "assets/js/6.187f1ff1.js",
    "revision": "ad59028204a9a79c02c59a4aee4122f1"
  },
  {
    "url": "assets/js/7.365cbb3a.js",
    "revision": "5bb9d093ae720c32e28ae7224e58648c"
  },
  {
    "url": "assets/js/8.f46fa9c2.js",
    "revision": "c7c49b0cf20b2891d2d3ce8a89a14dfc"
  },
  {
    "url": "assets/js/9.132903ee.js",
    "revision": "8d61fdf7b899a475c4b853db7d0796da"
  },
  {
    "url": "assets/js/app.87ce2d02.js",
    "revision": "82c6f0635e34347197339f5f541b9f31"
  },
  {
    "url": "assets/js/vendors~docsearch.43f0d7dc.js",
    "revision": "6579756e65bfe7efe60554b037de083f"
  },
  {
    "url": "contributions.html",
    "revision": "21305d2a226c1e264ddb9bd0a7b2097b"
  },
  {
    "url": "created/app.html",
    "revision": "92cc7d99fdad934e6ecf2784650fe232"
  },
  {
    "url": "created/index.html",
    "revision": "8a0ada340d73a8e2d50fbf5a689b0dc7"
  },
  {
    "url": "created/project.html",
    "revision": "d926b78fa6a80c5b27155f5e43fd3df7"
  },
  {
    "url": "features/allauth.html",
    "revision": "085f00019993c7ab02468f323dbf03b5"
  },
  {
    "url": "features/bootstrap.html",
    "revision": "66573b9825a34816d837939b6deab777"
  },
  {
    "url": "features/cookiecutter.html",
    "revision": "bf606a85b1846de057b71a4f34fa7e9b"
  },
  {
    "url": "features/docker.html",
    "revision": "b456cf1b70daa02cf61e8274b86cdd17"
  },
  {
    "url": "features/extensions.html",
    "revision": "eede84854f87e6bebc691c317e135479"
  },
  {
    "url": "features/gunicorn.html",
    "revision": "20f8da53ea5ba2ab190821ddad36eb0c"
  },
  {
    "url": "features/honcho.html",
    "revision": "063853a01b12088fef5c96b20b8f4b6a"
  },
  {
    "url": "features/index.html",
    "revision": "c1eba3d0433704042a52c8147658edc4"
  },
  {
    "url": "features/jinja2.html",
    "revision": "bb6a77a53332f2262980af36bc6608bb"
  },
  {
    "url": "features/mondrian.html",
    "revision": "f12b8c83e2b22d58f6545598a1262fd7"
  },
  {
    "url": "features/pytest.html",
    "revision": "a0d0e99e93dd1a419df596c6f609eff1"
  },
  {
    "url": "features/toolbar.html",
    "revision": "ee81b79a70a362e5dbc87dce6a23dd38"
  },
  {
    "url": "features/webpack.html",
    "revision": "f540af96eb2e87bd8a647168931c423c"
  },
  {
    "url": "features/whitenoise.html",
    "revision": "22322357ace633bc1fbc17ddd3e55fb9"
  },
  {
    "url": "getting-started.html",
    "revision": "f44a8bd64ecffc709f9823d681511cf9"
  },
  {
    "url": "guides/cli.html",
    "revision": "9660e07d1459b7e15bc8101a16082f0f"
  },
  {
    "url": "guides/deployment.html",
    "revision": "b28a54c758dbb40b90083cde4c65f508"
  },
  {
    "url": "guides/develop.html",
    "revision": "e592b15acc3d36fd6e626fd107a633c6"
  },
  {
    "url": "guides/frontend.html",
    "revision": "bd8997d2b595d6047f9002b8fcf7728b"
  },
  {
    "url": "guides/index.html",
    "revision": "246065cf0c51aa06f26b08a6e30c9af8"
  },
  {
    "url": "guides/templating.html",
    "revision": "39f8107b7df441f7c533f26d70e88502"
  },
  {
    "url": "guides/tests.html",
    "revision": "b5783b16ca1b205a8a9ad1afb2bd852a"
  },
  {
    "url": "guides/users.html",
    "revision": "190c2e45360d674577fe3732f58c41ed"
  },
  {
    "url": "howto/create-an-application.html",
    "revision": "7a73bcc1a61be9b0eaba6b5b6139b52f"
  },
  {
    "url": "howto/index.html",
    "revision": "5629d9b8ba92521fd5886dc3e05bd983"
  },
  {
    "url": "howto/install-celery.html",
    "revision": "e350efc16ead79730bd925e78bd4a021"
  },
  {
    "url": "index.html",
    "revision": "ef5f0d67409562d04d0eeeba85b1bc39"
  },
  {
    "url": "install.html",
    "revision": "095e9c6beeca40d9e640ac2c3ca07cb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
