import { NextRequest } from "next/server";
import { Tenant } from "./tenant";

declare module 'next/server' {
    interface NextRequest {
        tenant: Tenant | null;
    }
}