import GetParticipants from "./server";
import SidebarUsersSectionUI from "./ui";

export default async function SidebarUsersSection() {
    const response = await GetParticipants();

    return <SidebarUsersSectionUI participants={response} />
}