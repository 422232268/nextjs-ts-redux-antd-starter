import { createGlobalStyle } from 'styled-components'
// 全局样式设置，消去浏览器默认样式的影响
// 相当于把全局样式当成一个组件导出
export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	html, body {
		background: rgba(0,0,0,0.7);
    color: #fff;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
	// 字体图标的unicode编码
	@font-face {
      font-family: 'iconfont';  /* project id 897264 */
      src: url('//at.alicdn.com/t/font_897264_7ma62sn10m3.eot');
      src: url('//at.alicdn.com/t/font_897264_7ma62sn10m3.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_897264_7ma62sn10m3.woff') format('woff'),
      url('//at.alicdn.com/t/font_897264_7ma62sn10m3.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_897264_7ma62sn10m3.svg#iconfont') format('svg');
    }
    // 设置字体图标的大小
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .clearfix:after {visibility: hidden;display: block;font-size: 0;content: ".";clear: both;height: 0;}
    .clearfix {zoom: 1;}
`
