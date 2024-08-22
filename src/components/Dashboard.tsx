import {Tenant, User }from "@/types"

interface DashboardProps {
    tenant: Tenant;
    user: User;
}

const Dashboard = ({ tenant, user }: DashboardProps) => {
    return (
        <div>
            <h1>Welcome to {tenant.name}, {user.name}</h1>
            <p>This is your dashboard where you can manage your account, view analytics, and more.</p>
        </div>
    )
}

export default Dashboard;