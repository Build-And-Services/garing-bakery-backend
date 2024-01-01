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
        console.warn(`[${last.method}]  ${process.env.BASE_URL}${prefix + prefixApi + suffix}`);
      });
    });
  });
}

module.exports = LogRouter;
