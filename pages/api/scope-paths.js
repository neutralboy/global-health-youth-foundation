export default (req, res) => {
    const scope = [
     "decolonizing-global-health-working-group",
     "community-based-comprehensive-rural-health-and-education-internships",
     "youth-action-in-covid-19-focusing-on-disadvantaged-youth",
     "advocacy-interest-group-on-addressing-medical-student-issues-during-covid-19-india"
    ];
    res.status = 200;
    res.json(scope);
};