/// <reference types="@nuxtblog/plugin-sdk" />

module.exports = {
  activate() {
    ctx.log.info("Hello JS plugin activated!");
  },

  deactivate() {
    ctx.log.info("Hello JS plugin deactivated");
  },

  routes: [
    {
      method: "GET",
      path: "/api/plugin/nuxtblog-plugin-hello-js/hello",
      auth: "public",
      handler(req: RouteRequest) {
        const greeting = ctx.settings.get("greeting") || "Hello from Goja!";
        return { code: 0, message: "", data: { greeting } };
      },
    },
  ],

  onEvent(event: string, data: Record<string, unknown>) {
    ctx.log.debug("nuxtblog-plugin-hello-js received event: " + event);
  },
} satisfies PluginExports;
