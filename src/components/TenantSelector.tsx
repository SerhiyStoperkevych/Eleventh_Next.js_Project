'use client';

import { useState } from "react";
import { useRouter } from "next/router";
import { Tenant } from "@/models/Tenant";

interface TenantSelectorProps {
    tenants: Tenant[]
}

const TenantSelector = ({ tenants }: TenantSelectorProps) => {
    const router = useRouter();
    const [selectedTenant, setSelectedTenant] = useState(router.query.tenantId || tenants[0]?.id);
}
    return (
        <select value={selectedTenant} onChange={handleTenantChange}>
            {tenants.map(tenant => (
                <option value="tenant.id" key={tenant.id}>
                    {tenant.name}
                </option>
            ))}
        </select>
    )
;

export default TenantSelector;