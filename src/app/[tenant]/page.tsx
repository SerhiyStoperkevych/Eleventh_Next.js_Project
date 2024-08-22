'use client';

import { useEffect, useState } from "react";
import { useRouter} from "next/router";
import axios from "axios";
import Loader from "@/components/Loader";
import { Tenant } from "@/types";

export default function TenantPage() {
    const router = useRouter();
    const { tenant } = router.query;
    const [tenantData, setTenantData] = useState<Tenant | null>(null);

    useEffect(() => {
        if (tenant) {
            axios.get('/api/tenants/${tenant}').then((response) => {
                setTenantData(response.data);
            });
        }
    }, [tenant]);

    if (!tenantData) {
        return <Loader/>;
    }

    return (
        <div>
            <h1>Welcome to {tenantData.name}</h1>
            <p>Manage your tenant settings and view analytics here.</p>
        </div>
    )
}