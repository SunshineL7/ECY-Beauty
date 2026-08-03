import { createFileRoute, redirect } from "@tanstack/react-router";

/** 根路径重定向至首页 /home */
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/home" });
  },
});
