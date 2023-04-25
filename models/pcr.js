const mongoose = require("mongoose")

const pcrModels = mongoose.Schema(
    {
        withReferral:{
            type: Boolean
        },
        idCaller: {
            type: String
        },
        dispatchTime: {
            type: String
        },
        enRoute: {
            type: String
        },
        atTheScene: {
            type: String
        },
        leftTheScene: {
            type: String
        },
        atTheFacility: {
            type: String
        },
        siteOfResponse: {
            type: String
        },
        fname:{
            type: String
        },
        mname: {
            type: String
        },
        lname: {
            type: String
        },
        temperature: {
            type: String
        },
        dob: {
            type: String
        },
        age: {
            type: String
        },
        sex: {
            type: String
        },
        contactNumber:{
            type: String
        },
        nextOfKinName:{
            type: String
        },
        contactNumberKin: {
            type: String
        },
        temperatureKin: {
            type: String
        },
        lostOfConsciousness: {
            type: Boolean
        },
        consideredManual: {
            type: Boolean
        },
        ccChiefComplaint: {
            type: String
        },
        eyeOpening: {
            type: String
        },
        verbalResponse: {
            type: String
        },
        motorResponse: {
            type: String
        },
        airway: {
            type: String
        },
        circulationOfPulse: {
            type: String
        },
        breathing: {
            type: String
        },
        skin: {
            type: String
        },
        onset: {
            type: String
        },
        palliationProvocation: {
            type: String
        },
        quality:{
            type: String
        },
        radiation: {
            type: String
        },
        severity: {
            type: String
        },
        time: {
            type: String
        },
        signSymptoms:{
            type: String
        },
        ageAthletecismAllergies:{
            type: String
        },
        medication: {
            type: String
        },
        pastHistory: {
            type: String
        },
        lastOralIntake:{
            type: String
        },
        eventsLeadingToAccident:{
            type: String
        },
        deformity: {
            type: Boolean
        },
        contusion: {
            type: Boolean
        },
        bruise: {
            type: Boolean
        },
        laceration: {
            type: Boolean
        },
        abrasion: {
            type: Boolean
        },
        puncture: {
            type: Boolean
        },
        tenderness: {
            type: Boolean
        },
        swelling: {
            type: Boolean
        },
        etoh: {
            type: Boolean
        },
        subab: {
            type: Boolean
        },
        burn: {
            type: String
        },
        superf: {
            type: Boolean
        },
        partial: {
            type: Boolean
        },
        full: {
            type: Boolean
        },
        gravida: {
            type: Boolean
        },
        paraedd: {
            type: Boolean
        },
        truelabor: {
            type: Boolean
        },
        sec60: {
            type: Boolean
        },
        min2: {
            type: Boolean
        },
        crackles: {
            type: Boolean
        },
        wheezing: {
            type: Boolean
        },
        stridor: {
            type: Boolean
        },
        rhonchi: {
            type: Boolean
        },
        rales: {
            type: Boolean
        },
        cta: {
            type: Boolean
        },
        vitalSigns: [{
            time:{
                type: String
            },
            bloodPressure: {
                type: String
            },
            pulseRate: {
                type: String
            },
            spo2: {
                type: String
            },
            respiratoryQualityOne: {
                type: String
            },
            respiratoryQualityTwo: {
                type: String
            },
            glucose: {
                type: String
            },
            crt2sec: {
                type: String
            },
            leftPupil: {
                type: String
            },
            rightPupil: {
                type: String
            }
        }],
        openAirway: {
            type: Boolean
        },
        manClear: {
            type: Boolean
        },
        suction: {
            type: Boolean
        },
        o2blll: {
            type: Boolean
        },
        opa: {
            type: Boolean
        },
        nc: {
            type: Boolean
        },
        nebul: {
            type: Boolean
        },
        bvm: {
            type: Boolean
        },
        cpr: {
            type: Boolean
        },
        circulationStart: {
            type: String
        },
        circulationCycle: {
            type: String
        },
        cspine: {
            type: Boolean
        },
        splint: {
            type: Boolean
        },
        cleaning: {
            type: Boolean
        },
        bandaging: {
            type: Boolean
        },
        occlusiveDressing:{
            type: Boolean
        },
        positioningColdWarm:{
            type: Boolean
        },
        receivingFacility:{
            type: String
        },
        receivingProvider:{
            type: String
        },
        position: {
            type: String
        },
        signatureAdditionalInfo: {
            type: String
        },
        agreementPatient:{
            type: Boolean
        },
        signatureTime: {
            type: String
        },
        evaluation:{
            type: Boolean
        },
        evaluation:{
            type: Boolean
        },
        transport:{
            type: Boolean
        },
        refusalName:{
            type: String
        },
        refusalAge:{
            type: String
        },
        refusalDoB:{
            type: String
        },
        refusalAddress:{
            type: String
        },
        refusalAgree:{
            type: String
        },
        refusalRelationship:{
            type: String
        },
        refusalWitnessAgree:{
            type: Boolean
        },
        refusalWitnessName:{
            type: String
        },
        refusalDateTime:{
            type: String
        },
        decomposition:{
            type: Boolean
        },
        rigormortis:{
            type: Boolean
        },
        incineration: {
            type: Boolean
        },
        decapitation: {
            type: Boolean
        },
        pooling: {
            type: Boolean
        },
        otherInjuries: {
            type: Boolean
        },
        natureOfInjuries: {
            type: String
        },
        emr: {
            type: String
        },
        emragree: {
            type: Boolean
        },
        odometerDifferencial: {
            type: String
        },
        emrtl: {
            type: String
        },
        emrtlAgree: {
            type: Boolean
        },
        timeEndorsement:{
            type: String
        },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: false
        }
    },
    {
        timestamps: true
    }
)

const PCR = mongoose.model("PCR", pcrModels)

module.exports = PCR
