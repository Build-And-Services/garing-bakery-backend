function LogRouter(app) {
  const route = app._router.stack.filter((item) => item.name == 'router')[0];
  const regexp = app._router.stack.filter((item) => item.name == 'router')[0].regexp.toString();
  const prefix = regexp.slice(3, regexp.length - 13).replace(/\\/g, '');

  route.handle.stack.forEach((pathApi) => {
    const regpa = pathApi.regexp.toString();
    const prefixApi = regpa.slice(3, regpa.length - 13);
    pathApi.handle.stack.forEach((parameter) => {
      const suffix = parameter.route.path;
      parameter.route.stack.forEach((last) => {
        const red = '\x1b[31m';
        const green = '\x1b[32m';
        const yellow = '\x1b[33m';
        const blue = '\x1b[34m';
        const magenta = '\x1b[35m';
        const cyan = '\x1b[36m';
        const white = '\x1b[37m';
        let color = '';
        if (last.method == 'delete') {
          color = red;
        } else if (last.method == 'put') {
          color = yellow;
        } else if (last.method == 'post') {
          color = magenta;
        } else if (last.method == 'get') {
          color = cyan;
        } else {
          color = blue;
        }

        console.warn(
          `${color}[${last.method.toUpperCase()}] ${green}=>  ${white + process.env.BASE_URL}:${
            process.env.PORT
          }${prefix + prefixApi + suffix}`
        );
      });
    });
  });
}

module.exports = LogRouter;
