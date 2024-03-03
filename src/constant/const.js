const buttonData = {
    "Continuous Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
    "Laser Marking System": "Details about Laser Marking System",
    "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
    "Thermal Inkjets": "Details about Thermal Inkjets",
    "Case Coding": "Details about Case Coding",
    "Commercial Graphics": "Details about Commercial Graphics",
    };
    export default buttonData;
    export const videojetConnectLinks = [
    {
        label: "Videojet Workflow Module Portal",
        url: "https://wfx.videojet.com",
    },
    { label: "Veralto Sharepoint", url: "https://veralto.sharepoint.com" },
    { label: "Salesforce", url: "https:/videojet.my.salesforce.com" },
    { label: "Wheels", url: "https://wheels.com" },
    { label: "Videojet Remote Service", url: "https://videojetcloud.com" },
    {
        label: "7Day Password",
        url: "https://veralto.sharepoint.com/sites/VTISP/GC/Pages/7Days.aspx",
    },
    {
        label: "Concur Expense and Travel",
        url: "https://us2.concursolutions.com/home.asp",
    },
    { label: "ADP Payroll & Time and Attendance", url: "https://my.adp.com" },
    { label: "Workday", url: "https://myworkday.com" },
    { label: "IT Support Portal", url: "https://videojettit.atlassian.net" },
    { label: "CWT", url: "https://travel.mycwt.com" },
    { label: "Link 1", url: "https://example.com/link1" },
    { label: "Link 2", url: "https://example.com/link2" },
    ];

    export const appointmentManagementLinks = [
    {
        label: "My Awaiting Acceptance Appointment",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "My service Appointments(-7/+30d)",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "My Awaiting Acceptance Appointments",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "WT01 Service Appointments",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "My Open PM Appointments",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "My service Appointments(-7/+30d)",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "My Open PM Appointments",
        url: "https://idealforce.my.site.com/",
    },
    {
        label: "Inventory",
        url: "https://idealforce.my.site.com/",
    },
    ];
    export const getRouteName = (button) => {
    switch (button) {
        case "Continuous Inkjet(CIJ)":
        return "cij";
        case "Laser Marking System":
        return "laser";
        case "Thermal Transfer Overprints":
        return "thermal-transfer";
        case "Thermal Inkjets":
        return "thermal-inkjets";
        case "Case Coding":
        return "case-coding";
        case "Commercial Graphics":
        return "commercial-graphics";
        default:
        return "";
    }
};
