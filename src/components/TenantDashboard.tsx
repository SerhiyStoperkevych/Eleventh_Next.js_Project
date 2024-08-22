import { Tenant } from "@/types";

interface TenantDashboardProps {
    tenant: Tenant;
}

const TenantDashboard = ({ tenant }: TenantDashboardProps) => {
    return (
        <div>
            <h1>{tenant.name}</h1>
            <p>Manage your tenant settings, view reports, and more.</p>
        </div>
    )
}