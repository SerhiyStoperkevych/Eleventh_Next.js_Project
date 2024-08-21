export interface Tenant {
    id: string;
    name: string;
    domain: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TenantContext {
    tenant: Tenant | null;
    setTenant: (tenant: Tenant | null) => void;
}