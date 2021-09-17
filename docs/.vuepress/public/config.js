module.exports = {
  title: 'cyy的博客',
  description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
  themeConfig:{
  nav: [{text: "主页", link: "/"      },
      { text: "node", link: "/node/" },
      { text: "前端", 
        items: [ 
          { text: "html", link:"/web/html/"},
          { text: "css", link:"/web/css/"},
          ]
      },
      { text: "数据库", link: "/database/"   },
      { text: "android", link: "/android/"   },
      { text: "面试问题", link: "/interview/" }
    ],
	}
}