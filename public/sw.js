if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>s(e,n),t={module:{uri:n},exports:r,require:d};a[n]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DebbiHeart.png",revision:"0750931e3b60c24f500d0eaafeee4e3c"},{url:"/Favicon192x192.png",revision:"5a9f150da55e34393d815fb264353f56"},{url:"/Favicon256x256.png",revision:"7350de039d033fd16530f873a5312ed7"},{url:"/Favicon384x384.png",revision:"9f402860ff7a7472b98e796a654df43b"},{url:"/Favicon512x512.png",revision:"423a59cf234321c69ec4771b3bebe7e8"},{url:"/Grain-Texture.png",revision:"340b1620390b692ac0b2367c15d5ed9c"},{url:"/Grain-Texture.webp",revision:"d3c4cd7d4c90bc2572bce75a2fd5351a"},{url:"/JacobMax.png",revision:"2f1029195e6761d3b9c51cffe2ec5dde"},{url:"/Lauren.png",revision:"6d622fa44af0dbc14e9bdb99ffe4676a"},{url:"/MoraRuby.png",revision:"24af9c4736a700cbfd00ddb5967fdce4"},{url:"/Placeholder.jpg",revision:"08ec1f0ed8e4c30013f3130434e7aed8"},{url:"/Shadow.png",revision:"d627cf41c21221e8071206bf477f7948"},{url:"/StephenDan.png",revision:"4b4ae92d38cfd6bfd4bc402b6cf40ec0"},{url:"/TabletBanner.png",revision:"c73bef820f92de7ca665b58cf236d1c1"},{url:"/_next/static/VRpVL28fAGndnJElyI6hr/_buildManifest.js",revision:"03f032c34a8aa5420e224a7de74d85d7"},{url:"/_next/static/VRpVL28fAGndnJElyI6hr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1217-c8fa70a1c8085feb.js",revision:"c8fa70a1c8085feb"},{url:"/_next/static/chunks/1345-80380bba9320d73a.js",revision:"80380bba9320d73a"},{url:"/_next/static/chunks/1563-ca6fe859d0a940f8.js",revision:"ca6fe859d0a940f8"},{url:"/_next/static/chunks/1847-c80ff7d6505b1d65.js",revision:"c80ff7d6505b1d65"},{url:"/_next/static/chunks/1899-e95b5742ffcc3d4d.js",revision:"e95b5742ffcc3d4d"},{url:"/_next/static/chunks/2082.0267d7103afbae53.js",revision:"0267d7103afbae53"},{url:"/_next/static/chunks/2183-86791ba853c3276c.js",revision:"86791ba853c3276c"},{url:"/_next/static/chunks/2207-f5ec29260ca5566c.js",revision:"f5ec29260ca5566c"},{url:"/_next/static/chunks/2905.8b49280e4879643e.js",revision:"8b49280e4879643e"},{url:"/_next/static/chunks/3090.20b6c4fdbeb97ec2.js",revision:"20b6c4fdbeb97ec2"},{url:"/_next/static/chunks/3213-3d7a83d489faa189.js",revision:"3d7a83d489faa189"},{url:"/_next/static/chunks/3260-fecf63c02f486d13.js",revision:"fecf63c02f486d13"},{url:"/_next/static/chunks/4208.636d220fbde457f2.js",revision:"636d220fbde457f2"},{url:"/_next/static/chunks/440-65a09081acc6781d.js",revision:"65a09081acc6781d"},{url:"/_next/static/chunks/4894.04eaa2efea3e5de1.js",revision:"04eaa2efea3e5de1"},{url:"/_next/static/chunks/515-7bf00544e07b4c3b.js",revision:"7bf00544e07b4c3b"},{url:"/_next/static/chunks/5294-fe7de4d2e479650d.js",revision:"fe7de4d2e479650d"},{url:"/_next/static/chunks/5609-780a1c7ffb7b13ce.js",revision:"780a1c7ffb7b13ce"},{url:"/_next/static/chunks/5707-1308a9ce5620664d.js",revision:"1308a9ce5620664d"},{url:"/_next/static/chunks/5765-f74412da7496dba4.js",revision:"f74412da7496dba4"},{url:"/_next/static/chunks/5972-410d9dc66bec7f72.js",revision:"410d9dc66bec7f72"},{url:"/_next/static/chunks/6263.2d09f46ad269a830.js",revision:"2d09f46ad269a830"},{url:"/_next/static/chunks/6516.4addbc7e286e13fc.js",revision:"4addbc7e286e13fc"},{url:"/_next/static/chunks/652-442349c6e24c8a0f.js",revision:"442349c6e24c8a0f"},{url:"/_next/static/chunks/6597.6d14ec1151130ab5.js",revision:"6d14ec1151130ab5"},{url:"/_next/static/chunks/6886-1073c3772094ea2e.js",revision:"1073c3772094ea2e"},{url:"/_next/static/chunks/6999.966f56ffdfb071b9.js",revision:"966f56ffdfb071b9"},{url:"/_next/static/chunks/719-6babc8670910463f.js",revision:"6babc8670910463f"},{url:"/_next/static/chunks/7249.697592e467c15404.js",revision:"697592e467c15404"},{url:"/_next/static/chunks/7410.4565a81c1fe361ec.js",revision:"4565a81c1fe361ec"},{url:"/_next/static/chunks/7442-427488b04fe32506.js",revision:"427488b04fe32506"},{url:"/_next/static/chunks/7739-73f343996698110c.js",revision:"73f343996698110c"},{url:"/_next/static/chunks/787-992043785077e657.js",revision:"992043785077e657"},{url:"/_next/static/chunks/7934-14692903bd8a8cb0.js",revision:"14692903bd8a8cb0"},{url:"/_next/static/chunks/7994-72c42690bf40503a.js",revision:"72c42690bf40503a"},{url:"/_next/static/chunks/8205-64ff1c0893c2ca1a.js",revision:"64ff1c0893c2ca1a"},{url:"/_next/static/chunks/8884-8de7c251ee127ec4.js",revision:"8de7c251ee127ec4"},{url:"/_next/static/chunks/9-c7683a4a5106ba1e.js",revision:"c7683a4a5106ba1e"},{url:"/_next/static/chunks/9005-bcc0b247a2387945.js",revision:"bcc0b247a2387945"},{url:"/_next/static/chunks/9350-f2aa5471f2dcc231.js",revision:"f2aa5471f2dcc231"},{url:"/_next/static/chunks/9356.0a438157d8e26da0.js",revision:"0a438157d8e26da0"},{url:"/_next/static/chunks/9365.fb083c30364a08a8.js",revision:"fb083c30364a08a8"},{url:"/_next/static/chunks/9385-ac8a9161db8b7176.js",revision:"ac8a9161db8b7176"},{url:"/_next/static/chunks/9610-00169bac057515f4.js",revision:"00169bac057515f4"},{url:"/_next/static/chunks/986-17015575d9e81d97.js",revision:"17015575d9e81d97"},{url:"/_next/static/chunks/9882.c3b94c02b9ec0597.js",revision:"c3b94c02b9ec0597"},{url:"/_next/static/chunks/9986-33c556527a1b1167.js",revision:"33c556527a1b1167"},{url:"/_next/static/chunks/fe75db45-09532665d09e6515.js",revision:"09532665d09e6515"},{url:"/_next/static/chunks/framework-b8d05de00210eb46.js",revision:"b8d05de00210eb46"},{url:"/_next/static/chunks/main-a3a8357f1108ea71.js",revision:"a3a8357f1108ea71"},{url:"/_next/static/chunks/pages/%5Bslug%5D-ea44fe0b68173783.js",revision:"ea44fe0b68173783"},{url:"/_next/static/chunks/pages/%5Bslug%5D/checkout-5170e5cc95097efa.js",revision:"5170e5cc95097efa"},{url:"/_next/static/chunks/pages/%5Bslug%5D/faq-7b88a7d5d1b72fa0.js",revision:"7b88a7d5d1b72fa0"},{url:"/_next/static/chunks/pages/%5Bslug%5D/privacy-policy-139b3d5c5e884dcf.js",revision:"139b3d5c5e884dcf"},{url:"/_next/static/chunks/pages/%5Bslug%5D/product/%5Bid%5D-3c10ba2912b1c057.js",revision:"3c10ba2912b1c057"},{url:"/_next/static/chunks/pages/%5Bslug%5D/products-2bac7187b2df9386.js",revision:"2bac7187b2df9386"},{url:"/_next/static/chunks/pages/%5Bslug%5D/return-form-d0a3f29b1d5b10bc.js",revision:"d0a3f29b1d5b10bc"},{url:"/_next/static/chunks/pages/%5Bslug%5D/return-policy-07e5b11799b8712d.js",revision:"07e5b11799b8712d"},{url:"/_next/static/chunks/pages/%5Bslug%5D/shop-2ca9582a987aae8a.js",revision:"2ca9582a987aae8a"},{url:"/_next/static/chunks/pages/%5Bslug%5D/terms-and-conditions-afc6407cdf2666ba.js",revision:"afc6407cdf2666ba"},{url:"/_next/static/chunks/pages/%5Bslug%5D/thankyou-return-ee28160398fcbad7.js",revision:"ee28160398fcbad7"},{url:"/_next/static/chunks/pages/404-1e9b225ddbe31075.js",revision:"1e9b225ddbe31075"},{url:"/_next/static/chunks/pages/_app-e1d7777fe2dd161a.js",revision:"e1d7777fe2dd161a"},{url:"/_next/static/chunks/pages/_error-2fa2144eb6ab5da5.js",revision:"2fa2144eb6ab5da5"},{url:"/_next/static/chunks/pages/brand-terms-899fb92dfe55b176.js",revision:"899fb92dfe55b176"},{url:"/_next/static/chunks/pages/creator-terms-505c605490fca243.js",revision:"505c605490fca243"},{url:"/_next/static/chunks/pages/faq-db8b4a695872eb7c.js",revision:"db8b4a695872eb7c"},{url:"/_next/static/chunks/pages/for-brands-54bf41c2ca381447.js",revision:"54bf41c2ca381447"},{url:"/_next/static/chunks/pages/for-creator-bf9469c8beb3fffe.js",revision:"bf9469c8beb3fffe"},{url:"/_next/static/chunks/pages/index-04454dce7d7aadd6.js",revision:"04454dce7d7aadd6"},{url:"/_next/static/chunks/pages/privacy-policy-6dc770cbcbd791d8.js",revision:"6dc770cbcbd791d8"},{url:"/_next/static/chunks/pages/return-form-f524c109d52a1605.js",revision:"f524c109d52a1605"},{url:"/_next/static/chunks/pages/return-policy-37505e4a4fe54114.js",revision:"37505e4a4fe54114"},{url:"/_next/static/chunks/pages/terms-and-conditions-2a1ea889c1b3de25.js",revision:"2a1ea889c1b3de25"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-00937b5ff100364f.js",revision:"00937b5ff100364f"},{url:"/_next/static/css/01aadbf18390864e.css",revision:"01aadbf18390864e"},{url:"/_next/static/css/189d476a8fe4c153.css",revision:"189d476a8fe4c153"},{url:"/_next/static/css/7ebe8f913e22c6e5.css",revision:"7ebe8f913e22c6e5"},{url:"/_next/static/css/a2245f09a39d9854.css",revision:"a2245f09a39d9854"},{url:"/_next/static/media/DebbiHeart.921cdad2.png",revision:"0750931e3b60c24f500d0eaafeee4e3c"},{url:"/_next/static/media/JacobMax.abda9291.png",revision:"2f1029195e6761d3b9c51cffe2ec5dde"},{url:"/_next/static/media/Lauren.f0ce1730.png",revision:"6d622fa44af0dbc14e9bdb99ffe4676a"},{url:"/_next/static/media/Placeholder.762e3c87.jpg",revision:"08ec1f0ed8e4c30013f3130434e7aed8"},{url:"/_next/static/media/Shadow.b4a98158.png",revision:"d627cf41c21221e8071206bf477f7948"},{url:"/_next/static/media/StephenDan.43118aa0.png",revision:"4b4ae92d38cfd6bfd4bc402b6cf40ec0"},{url:"/_next/static/media/TabletBanner.7b383a9b.png",revision:"c73bef820f92de7ca665b58cf236d1c1"},{url:"/_next/static/media/blue-meshh.d64b89ac.png",revision:"f2ca2448bf0847a31b473e2d5ddd953c"},{url:"/_next/static/media/blueMesh-brand.3cd83321.png",revision:"060c6bb5b3e782e977b730a452438612"},{url:"/_next/static/media/bottom-mesh.6a0bf72d.png",revision:"2e98566582bba76ab992df7d0a38a9fb"},{url:"/_next/static/media/cartList.07db160f.png",revision:"6adeafc2a3e79842cef3fd9cdfaff2e6"},{url:"/_next/static/media/creatorbanner.2c6cae70.png",revision:"4d7f47ae100086dabf4bd0c05624a35f"},{url:"/_next/static/media/demoo.e814ac16.png",revision:"1021483c40da0996fd9a4bdfe7d522b5"},{url:"/_next/static/media/desktopBanner.6efa8de5.png",revision:"416602858d105d6feebe9dcb59774f98"},{url:"/_next/static/media/firstGrid.f4ac96a9.png",revision:"37698140e39435290b4f0f3e756e9979"},{url:"/_next/static/media/footer-logo.684a4a24.svg",revision:"70088fe90cdc573cddd428ced6c1f00b"},{url:"/_next/static/media/forbrand-sec1-img1.66c257de.png",revision:"8c150df21bd6ef9db5e40a5e3a87fe28"},{url:"/_next/static/media/free-join.7e13e8d4.png",revision:"bb163dfccdd6d00e4bbac61a463ad7c9"},{url:"/_next/static/media/glow.d862ac87.svg",revision:"2e0fe36c0fb8688e8fac2f55622c6b75"},{url:"/_next/static/media/hassle-icon1.9b2da353.png",revision:"f458ec386dfe28980d029399cfb6fd40"},{url:"/_next/static/media/hassle-icon2.2a7f047b.png",revision:"a2811b05c19447ac23afd1a9697fc6bf"},{url:"/_next/static/media/hassle-icon3.d252064c.png",revision:"5c7e65c7f16f4b235b991e91640b6d3b"},{url:"/_next/static/media/hassle-icon4.b7834f55.png",revision:"b8036851867ed19725d2ac8a3ad04902"},{url:"/_next/static/media/header-logo.6854d40b.svg",revision:"4ec8d79a7fea943fabc52ea4eabcb51c"},{url:"/_next/static/media/insta-icon.955d5a8f.svg",revision:"a594ed47488be7e9fff36aed3436174c"},{url:"/_next/static/media/largeBanner.2c79916b.png",revision:"a196aed136b99b3c62153229a94ffc58"},{url:"/_next/static/media/left-pink-meshes.b9f01ae7.webp",revision:"7a03414b82a170f072eb845129051a91"},{url:"/_next/static/media/menu-icon.b08559e7.png",revision:"c38741be6343e25e31662745a5db09f6"},{url:"/_next/static/media/mesh-pink-orange.4b680b73.png",revision:"2294d36c5db6b58555c959528b91638c"},{url:"/_next/static/media/meshHome-gradient.4b680b73.png",revision:"2294d36c5db6b58555c959528b91638c"},{url:"/_next/static/media/mobbanner.f1295e00.webp",revision:"71604531fbf329dc1de88a736d4cb6c1"},{url:"/_next/static/media/orange-meshes.3b24477d.png",revision:"0834c9d5f8344a27be16541de3f20a98"},{url:"/_next/static/media/people-trust-people.02c82de2.png",revision:"9397d6436bd5c6186189f4e7844bbe46"},{url:"/_next/static/media/purple-gradient.9d10171c.png",revision:"9f96a9ee12fd30b3e284fb985b28d2c7"},{url:"/_next/static/media/right-arrow.38513b65.svg",revision:"4c079d26a6b2f7716638258c3086aae0"},{url:"/_next/static/media/sales-brand1.14c4ff84.png",revision:"a3573507586880b612f91e4a3f0dc5f1"},{url:"/_next/static/media/secondGrid.67319f92.png",revision:"487aafd1d2d10189f3025de5cf1ae2de"},{url:"/_next/static/media/set-forgot.3424a449.png",revision:"8f982bd2c4d9aeaa47bbf98007d264dc"},{url:"/_next/static/media/skeletonImg.c37a9562.jpeg",revision:"6ab2a87563dd9cd807b374d07401250d"},{url:"/_next/static/media/step1.e0c23314.png",revision:"0f684d0b640f647fc412df5900fa11ef"},{url:"/_next/static/media/step2.e3da6b48.png",revision:"9352ff0c5178b0181a2d6376df039c00"},{url:"/_next/static/media/step3.89d67fa5.png",revision:"ea3123f455294d769c4cd0ac9e9631a3"},{url:"/_next/static/media/step4.34ed2210.png",revision:"9d3eaea519212a5f11b6903389065a80"},{url:"/_next/static/media/thirdGrid.27b46104.png",revision:"53d95e3422927c7bdc3d31438c384576"},{url:"/_next/static/media/tiktok-icon.53b413ad.svg",revision:"4a61b33954f12c68b37dd9e73b8ef59a"},{url:"/_next/static/media/top-mesh.32d0f01e.png",revision:"a3e6725c711d6112a008384b2342da79"},{url:"/_next/static/media/work1.e3da6b48.png",revision:"9352ff0c5178b0181a2d6376df039c00"},{url:"/_next/static/media/work2.3553f429.png",revision:"1c519cc366127a2a34099e3c770a500a"},{url:"/_next/static/media/work3.34ed2210.png",revision:"9d3eaea519212a5f11b6903389065a80"},{url:"/_next/static/media/work4.bee3aa46.png",revision:"2c09d3912aa746dd1e8a57297ae1193b"},{url:"/amex.png",revision:"8b176bde69628fa6159719b8cff90cb3"},{url:"/apple-touch-icon.png",revision:"da517be0cdee18b29b4b7d159f2d1a0b"},{url:"/applePay.png",revision:"aeff002b6dd3ddb32a07ded8c753fb71"},{url:"/arrow-right-black.svg",revision:"76ece0e0124db38defe185bdcb4bcaac"},{url:"/backArrow.png",revision:"56f1d93c3e602097254056562bda0a97"},{url:"/blue-meshh.png",revision:"f2ca2448bf0847a31b473e2d5ddd953c"},{url:"/blueMesh-brand.png",revision:"060c6bb5b3e782e977b730a452438612"},{url:"/bottom-mesh.png",revision:"2e98566582bba76ab992df7d0a38a9fb"},{url:"/cart.png",revision:"775597bd0d03bc0521db333bd3024ba5"},{url:"/cartList.png",revision:"6adeafc2a3e79842cef3fd9cdfaff2e6"},{url:"/creatorbanner.png",revision:"4d7f47ae100086dabf4bd0c05624a35f"},{url:"/demoo.png",revision:"1021483c40da0996fd9a4bdfe7d522b5"},{url:"/desktopBanner.png",revision:"416602858d105d6feebe9dcb59774f98"},{url:"/favicon.ico",revision:"fad2b0dbe094df4a43e9eed2aad21aa7"},{url:"/firstGrid.png",revision:"37698140e39435290b4f0f3e756e9979"},{url:"/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/footer-logo.svg",revision:"70088fe90cdc573cddd428ced6c1f00b"},{url:"/forbrand-sec1-img1.png",revision:"8c150df21bd6ef9db5e40a5e3a87fe28"},{url:"/free-join.png",revision:"bb163dfccdd6d00e4bbac61a463ad7c9"},{url:"/globe.svg",revision:"09988c15d576255a75e1ee5016f2d871"},{url:"/glow.svg",revision:"2e0fe36c0fb8688e8fac2f55622c6b75"},{url:"/googleIcon.png",revision:"6abedb3d5be5911c50ecdd043a8fafda"},{url:"/hassle-icon1.png",revision:"f458ec386dfe28980d029399cfb6fd40"},{url:"/hassle-icon2.png",revision:"a2811b05c19447ac23afd1a9697fc6bf"},{url:"/hassle-icon3.png",revision:"5c7e65c7f16f4b235b991e91640b6d3b"},{url:"/hassle-icon4.png",revision:"b8036851867ed19725d2ac8a3ad04902"},{url:"/header-logo.svg",revision:"4ec8d79a7fea943fabc52ea4eabcb51c"},{url:"/insta-icon.svg",revision:"a594ed47488be7e9fff36aed3436174c"},{url:"/instagram-icon.svg",revision:"40ac5e03df47a86139e605fa78122e16"},{url:"/instagram.png",revision:"b6606cf89a8488f1ab18df0e54ce6ed0"},{url:"/largeBanner.png",revision:"a196aed136b99b3c62153229a94ffc58"},{url:"/left-pink-meshes.png",revision:"d816547666017aa253fff4991bde8275"},{url:"/left-pink-meshes.webp",revision:"7a03414b82a170f072eb845129051a91"},{url:"/loaderShim.png",revision:"4ad829214bde4abbffd97727e031e3fc"},{url:"/mIcons.png",revision:"cd7b957368cfc1094dfcdea506aa44fe"},{url:"/manifest/manifest.webmanifest",revision:"c1800c99af56473b15755df966505f9d"},{url:"/mastercard.png",revision:"16be88d5f6d460a58f7c103efc45abb4"},{url:"/menu-icon.png",revision:"c38741be6343e25e31662745a5db09f6"},{url:"/menuIcon.png",revision:"c9c4baacc8bdea35dcd507294a224aeb"},{url:"/mesh-pink-orange.png",revision:"2294d36c5db6b58555c959528b91638c"},{url:"/meshHome-gradient.png",revision:"2294d36c5db6b58555c959528b91638c"},{url:"/mobBanner.png",revision:"eea325580acf11f681e65df0499913b6"},{url:"/mobBanner1.webp",revision:"516b6375e113b4ce9f2301b9c43ae8bd"},{url:"/mobbanner.webp",revision:"71604531fbf329dc1de88a736d4cb6c1"},{url:"/new-favicon.ico",revision:"0086d263eb8597aa89dae7bc17f84ea7"},{url:"/noImage.jpeg",revision:"ef09e9b9883053ee55628b07c5ff7ec7"},{url:"/orange-meshes.png",revision:"0834c9d5f8344a27be16541de3f20a98"},{url:"/paypal.png",revision:"78ceeedbfcc73f06ca65881da93f6b77"},{url:"/pedlar.png",revision:"e183d5678f55dcdc6cd2f73ce37dff02"},{url:"/pedlarIcon.png",revision:"3ca630ad0bece1b1b203207066f61002"},{url:"/people-trust-people.png",revision:"9397d6436bd5c6186189f4e7844bbe46"},{url:"/pink-meshes.png",revision:"d816547666017aa253fff4991bde8275"},{url:"/productImage.png",revision:"8dc45c2f275ae2ff90daf6544f713542"},{url:"/purple-gradient.png",revision:"9f96a9ee12fd30b3e284fb985b28d2c7"},{url:"/right-arrow.svg",revision:"4c079d26a6b2f7716638258c3086aae0"},{url:"/robots.txt",revision:"a5949558239ab7515b89a6360f51f2f9"},{url:"/sales-brand1.png",revision:"a3573507586880b612f91e4a3f0dc5f1"},{url:"/search.png",revision:"3a957d6985fd44e5b3005c52364a8d6d"},{url:"/secondGrid.png",revision:"487aafd1d2d10189f3025de5cf1ae2de"},{url:"/set-forgot.png",revision:"8f982bd2c4d9aeaa47bbf98007d264dc"},{url:"/shopPay.png",revision:"d23f9bd24a23ee99da0ddeb146ed03ab"},{url:"/skeletonImg.jpeg",revision:"6ab2a87563dd9cd807b374d07401250d"},{url:"/skeletonImg.png",revision:"3ede03cacd2c6de916cb602ab9b05df4"},{url:"/step1.png",revision:"0f684d0b640f647fc412df5900fa11ef"},{url:"/step2.png",revision:"9352ff0c5178b0181a2d6376df039c00"},{url:"/step3.png",revision:"ea3123f455294d769c4cd0ac9e9631a3"},{url:"/step4.png",revision:"9d3eaea519212a5f11b6903389065a80"},{url:"/stephen.png",revision:"748f924f10f7d6a89f1e270fb8da3358"},{url:"/thirdGrid.png",revision:"53d95e3422927c7bdc3d31438c384576"},{url:"/tiktok-icon.svg",revision:"4a61b33954f12c68b37dd9e73b8ef59a"},{url:"/tiktok-icon2.svg",revision:"0400f93d693fc7f407b6e0e9539c5751"},{url:"/tiktok.png",revision:"170f84abc0884425a921b1037c40bfa5"},{url:"/top-mesh.png",revision:"a3e6725c711d6112a008384b2342da79"},{url:"/visa.png",revision:"2bda31f7a6dd226db2953cfe272a42cb"},{url:"/visa.svg",revision:"532f0d86fbccd61cbf86bd2b6f828b44"},{url:"/work1.png",revision:"9352ff0c5178b0181a2d6376df039c00"},{url:"/work2.png",revision:"1c519cc366127a2a34099e3c770a500a"},{url:"/work3.png",revision:"9d3eaea519212a5f11b6903389065a80"},{url:"/work4.png",revision:"2c09d3912aa746dd1e8a57297ae1193b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
