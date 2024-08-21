import Tenant from "@/models/Tenant";
import dbConnect from "./dbConnect";

export async function getTenant(domain: string) {
    await dbConnect();
    const tenant = await Tenant.findOne({ domain });
    return tenant;
}