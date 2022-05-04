class Commander {
    constructor(req) {
        this.id = req.id;
        this.name = req.name;
        this.lang = req.lang;
        this.missionCommander = req.missionCommander;
        this.enrollments = req.enrollments;
        this.hasCertification = req.hasCertification;
    }
}

export default Commander;
