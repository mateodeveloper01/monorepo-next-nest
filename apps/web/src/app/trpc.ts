import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from '@server/trpc/trpc.router'
import { env } from "process";


export const trpc = createTRPCProxyClient<AppRouter>({

  links: [
    httpBatchLink({
      url: `${env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`, // you should update this to use env variables
    }),
  ],
});
