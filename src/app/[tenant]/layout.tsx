import { ReactNode } from "react";

interface TenantLayoutProps {
    children: ReactNode;
    params: { tenant: string };
}

export default function TenantLayout({ children, params }: TenantLayoutProps) {
    return (
        <div>
            <header>
                <h1>{params.tenant} Dashboard</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}