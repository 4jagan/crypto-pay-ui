import mockDashboardData, { DashboardData } from "./mockDashboardData";

export default async function getDashboardData() {
    // Fetch data from your API or database
    const data: DashboardData = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDashboardData);
        }, 1000);
    });
    return data;
}
