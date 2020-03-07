module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        let userpoor = [
          { username: 'huzhangwei', password: '123456' },
        ]

        //注册接口
        app.get('/api/register', (req, res) => {
          // eslint-disable-next-line no-unused-vars
          const { username, password } = req.query
          const userlength = userpoor.filter(v => v.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        //登录接口
        let tokenkey = 'hzwclass'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if (username == 'huzhangwei' && password == '123456') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })

        //首页轮播图数据接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [
              {
                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103806/19/14030/153344/5e6074acEd00048e1/555b1b4a66630f65.jpg!cr_1125x445_0_171!q70.jpg.dpg'
              },
              {
                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/104744/2/13908/95216/5e5f4dd2Eb59a3b50/ca237c37c0f2ce10.jpg!cr_1125x445_0_171!q70.jpg.dpg'
              },
              {
                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/52022/13/4372/116319/5d202c35E94762c27/329610707ce90c1a.jpg!cr_1125x445_0_171!q70.jpg.dpg'
              },
              {
                image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/88409/37/13768/67424/5e5e0d14E366916d3/2a758416a5aefe97.jpg!cr_1125x445_0_171!q70.jpg.dpg'
              }
            ]
          })
        })

        //滚动分类接口
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                  label: '京东超市'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
                  label: '数码电器'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                  label: '京东服饰'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
                  label: '京东生鲜'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                  label: '京东到家'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                  label: '充值缴费'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                  label: '9.9拼购'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                  label: '领券'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                  label: '赚钱'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
                  label: 'PLUS会员'
                },
              ],
              [
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png.webp',
                  label: '京东国际'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp',
                  label: '京东拍卖'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp',
                  label: '唯品会'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
                  label: '玩3C'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp',
                  label: '沃尔玛'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
                  label: '美妆馆'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp',
                  label: '京东旅行'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp',
                  label: '拍拍二手'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp',
                  label: '物流查询'
                },
                {
                  image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png',
                  label: '全部'
                },
              ],
            ]
          })
        })

        //获取分类页的分类接口
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg',
                    label: '全面屏手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg',
                    label: '游戏手机'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg',
                    label: '充电宝'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg',
                    label: '体温计'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/99797/24/11893/15941/5e3e841aE2b32361d/63dcf9162ec4e1f4.jpg',
                    label: '中医保健'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t1/109041/23/5605/14288/5e3e848bE289e1d01/8b8af78cfeda0e5e.jpg',
                    label: '调节免疫'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t1/108873/12/5675/17296/5e3e8517E22c8d9ad/b53ebc459d1b69fe.jpg',
                    label: '经管励志'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg',
                    label: '摄影机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg',
                    label: '游戏机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg',
                    label: '除菌液'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png',
                    label: '冰箱'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/103763/18/11682/15934/5e3e8113E0ec7622d/60e28dbaee663653.jpg',
                    label: '电磁炉'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t1/89471/40/11805/13074/5e3e8194E4f565ca8/62a310314e34dcf2.jpg',
                    label: '微波炉'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t1/99259/34/11845/15840/5e3e8258Ea2ebb9dd/50154478628700f6.jpg',
                    label: '曲面电视'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/102684/5/11696/17388/5e3e85d5E865de0cc/f6c53a8ec210a44c.jpg',
                    label: '电热饭盒'
                  },
                ]
              });
              break;
            case '1':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: 'iPhone'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                    label: 'vivo'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
                    label: '魅族'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg',
                    label: '电热水壶'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg',
                    label: '电压力锅'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg',
                    label: '电磁炉'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg',
                    label: '电烤箱'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                data: [
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
                    label: '轻薄本'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
                    label: '游戏本'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg',
                    label: '机械键盘'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
                    label: '移动硬盘'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t18103/87/2517823758/30777/deea9adf/5afd3d1cN8cd5e8cc.jpg',
                    label: '乳液/面霜'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t19678/73/2552924985/24992/eb27e199/5afd3d16N945cdc81.jpg',
                    label: '眼霜'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t20455/190/132026113/13944/24601ad4/5afd3d07N2d13b43f.jpg',
                    label: '睡眠面膜'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t19189/251/2505274305/20543/3440faf0/5afd3cf3N79f5cd53.jpg',
                    label: '润唇膏'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                data: [
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
                    label: '清洁馆'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
                    label: '清洁馆'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
                    label: '清洁馆'
                  },
                  {
                    image: '//img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
                    label: '清洁馆'
                  },
                ]
              });
              break;
            case '6':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg',
                    label: '全部车型'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg',
                    label: '全部车型'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg',
                    label: '全部车型'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t1/8473/10/11628/10657/5c2dbb1cE47193b77/7f241ac8f7889f1d.jpg',
                    label: '全部车型'
                  },
                ]
              });
              break;
            case '7':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg',
                    label: '休闲零食'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg',
                    label: '休闲零食'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg',
                    label: '休闲零食'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11431/77/1274462175/4200/a52ec5cc/59ffd6e2N287c043d.jpg',
                    label: '休闲零食'
                  },
                ]
              });
              break;
            case '8':
              res.json({
                data: [
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                    label: 'T恤'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                    label: 'T恤'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                    label: 'T恤'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                    label: 'T恤'
                  },
                ]
              });
              break;
            case '9':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg',
                    label: '帆布鞋'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11992/144/2244194535/2627/3de251a9/5a139564Naee94e4a.jpg',
                    label: '帆布鞋'
                  },
                ]
              });
              break;
            case '10':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
                    label: '连衣裙'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
                    label: '连衣裙'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
                    label: '连衣裙'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
                    label: '连衣裙'
                  },
                ]
              });
              break;
            case '11':
              res.json({
                data: [
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                    label: '平底单鞋'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                    label: '平底单鞋'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                    label: '平底单鞋'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                    label: '平底单鞋'
                  },
                ]
              });
              break;
            case '12':
              res.json({
                data: [
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg',
                    label: '山地车'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg',
                    label: '山地车'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg',
                    label: '山地车'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t12256/40/1732819447/8543/fbd86360/5a28a1c1N59fcfd07.jpg',
                    label: '山地车'
                  },
                ]
              });
              break;
            case '13':
              res.json({
                data: [
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t22348/56/187871154/19174/f25673d6/5b02410aNf2cc12a3.jpg',
                    label: '糖果/巧克力'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t22348/56/187871154/19174/f25673d6/5b02410aNf2cc12a3.jpg',
                    label: '糖果/巧克力'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t22348/56/187871154/19174/f25673d6/5b02410aNf2cc12a3.jpg',
                    label: '糖果/巧克力'
                  },
                  {
                    image: '//img12.360buyimg.com/focus/s140x140_jfs/t22348/56/187871154/19174/f25673d6/5b02410aNf2cc12a3.jpg',
                    label: '糖果/巧克力'
                  },
                ]
              });
              break;
            case '14':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg',
                    label: '鲜花'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg',
                    label: '鲜花'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg',
                    label: '鲜花'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg',
                    label: '鲜花'
                  },
                ]
              });
              break;
            case '15':
              res.json({
                data: [
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t13615/257/1187221579/8566/1203946a/5a1bdd89Nac28d508.jpg',
                    label: '花卉'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t13615/257/1187221579/8566/1203946a/5a1bdd89Nac28d508.jpg',
                    label: '花卉'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t13615/257/1187221579/8566/1203946a/5a1bdd89Nac28d508.jpg',
                    label: '花卉'
                  },
                  {
                    image: '//img13.360buyimg.com/focus/s140x140_jfs/t13615/257/1187221579/8566/1203946a/5a1bdd89Nac28d508.jpg',
                    label: '花卉'
                  },
                ]
              });
              break;
            case '16':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11572/69/1797650838/3868/3290c4cc/5a094b58Nb44526f9.jpg',
                    label: 'SK-II'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11572/69/1797650838/3868/3290c4cc/5a094b58Nb44526f9.jpg',
                    label: 'SK-II'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11572/69/1797650838/3868/3290c4cc/5a094b58Nb44526f9.jpg',
                    label: 'SK-II'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t11572/69/1797650838/3868/3290c4cc/5a094b58Nb44526f9.jpg',
                    label: 'SK-II'
                  },
                ]
              });
          }
        })

        //首页推荐接口
        app.get('/api/recommend', (req, res) => {
          res.json({
            data: [
              {
                image: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/51082/25/11627/245323/5d88d217E174e92e2/92ebad1a16ddf166.jpg!q70.dpg.webp',
                label: 'realme 真我X2 6400万超广角四摄 高通骁龙730G 30W VOOC4.0闪充 4000mAh大电池 全网通8GB+128GB 星图蓝 游戏智能手机',
                price:'￥199'
              },
              {
                image: '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/40194/26/1028/165624/5cbbdd98Eb9e794fa/95af6fbf37d4dbc6.jpg!q70.dpg.webp',
                label: '行李箱套拉杆箱旅行箱保护套防尘罩弹力20/24/26/28/29寸加厚耐磨 穿礼服的汤姆M码',
                price:'￥299'
              },
              {
                image: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/5674/7/16692/408122/5be244a0Ec0718b02/625989961e082605.jpg!q70.dpg.webp',
                label: '俄罗斯进口 KDV巧克力味夹心糖500g（代可可脂）紫皮糖喜糖糖果kpokaht',
                price:'￥99'
              },
              {
                image: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/64709/27/2134/171675/5d0727bdEd714c689/86d273c2dbfd0c3a.jpg!q70.dpg.webp',
                label: '超薄LED调色吸顶灯 长方形客厅灯具卧室灯简约现代餐厅创意灯 黑色款40*40cm 三色调光',
                price:'￥499'
              },
              {
                image: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/95019/35/13937/178584/5e5e04bcE12af2cbb/4c47a8d0eec5ac0e.jpg!q70.dpg.webp',
                label: '三只松鼠蔓越莓曲奇 饼干蛋糕网红儿童零食早餐食品点心薄脆饼干100g/袋',
                price:'￥29'
              },
              {
                image: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/21811/25/5979/430888/5c459b2aEeb7e568e/51dab8ad6e587664.jpg!q70.dpg.webp',
                label: '朗悦女装 2020夏季新款蕾丝拼接短袖T恤女刺绣韩版宽松上衣打底衫 LWTD191445 粉色 M',
                price:'￥599'
              }
            ]
          })
        })

      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
