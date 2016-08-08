var url = {
    // 用户注册接口
    login: '/user/100/',
    // 用户登录
    signin: '/api/user/101/',
    // 用户退出接口
    signout: '/user/102/',
    // 用户修改密码接口
    updatePass: '/user/103/',
    // 增加虚拟用户类型
    addVirType: '/user/104/',
    // 创建虚拟用户
    createVirUser: '/user/105/',
    // 获取虚拟用户类型
    getVirStyle: '/user/106/',
    // 获取虚拟用户昵称
    getVirNick: '/user/107/',
    // 获取用户列表
    getUsers: '/user/108/',
    // 获取心情名称
    getMoodName: '/aiya/100/',
    // 通过心情获取音乐链接
    getMusicByMood: '/aiya/101/',
    // 通过关键字获取音乐链接
    getMusicByKey: '/aiya/102/',
    // 获取图片链接
    getPic: '/aiya/103/',
    // 发送哎吖
    sendAiya: '/aiya/104/',
    // 自动发送哎吖
    sendAiyaAuto: '/aiya/106/',
    // 哎吖点赞接口
    dianzan: '/aiya/105/',
    // 添加关键字回应
    addKeyAnswer: '/robot/100/',
    // 修改关键字回应内容
    updateKeyAnswer: '/robot/101/',
    // 删除关键字回应内容
    deleteKeyAnswer: '/robot/102/',
    // 删除关键字接口
    deleteKey: '/robot/103/',
    // 获取关键字接口
    getKey: '/robot/104/',
    // 获取特定关键字及回应内容接口
    getKeyAndAnswers: '/robot/105/'
};

exports.url = url;
