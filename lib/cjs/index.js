"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntity = exports.validatePerson = exports.euVat = exports.entityValidators = exports.personValidators = exports.stdnum = void 0;
const AD = __importStar(require("./ad"));
const AL = __importStar(require("./al"));
const AR = __importStar(require("./ar"));
const AT = __importStar(require("./at"));
const AU = __importStar(require("./au"));
const AZ = __importStar(require("./az"));
const BA = __importStar(require("./ba"));
const BE = __importStar(require("./be"));
const BG = __importStar(require("./bg"));
const BR = __importStar(require("./br"));
const BY = __importStar(require("./by"));
const BZ = __importStar(require("./bz"));
const CA = __importStar(require("./ca"));
const CH = __importStar(require("./ch"));
const CL = __importStar(require("./cl"));
const CN = __importStar(require("./cn"));
const CO = __importStar(require("./co"));
const CR = __importStar(require("./cr"));
const CU = __importStar(require("./cu"));
const CY = __importStar(require("./cy"));
const CZ = __importStar(require("./cz"));
const DE = __importStar(require("./de"));
const DK = __importStar(require("./dk"));
const DO = __importStar(require("./do"));
const EC = __importStar(require("./ec"));
const EE = __importStar(require("./ee"));
const ES = __importStar(require("./es"));
const FI = __importStar(require("./fi"));
const FR = __importStar(require("./fr"));
const GB = __importStar(require("./gb"));
const GR = __importStar(require("./gr"));
const GT = __importStar(require("./gt"));
const HK = __importStar(require("./hk"));
const HR = __importStar(require("./hr"));
const HU = __importStar(require("./hu"));
const ID = __importStar(require("./id"));
const IE = __importStar(require("./ie"));
const IL = __importStar(require("./il"));
const IN = __importStar(require("./in"));
const IS = __importStar(require("./is"));
const IT = __importStar(require("./it"));
const JP = __importStar(require("./jp"));
const KR = __importStar(require("./kr"));
const LI = __importStar(require("./li"));
const LT = __importStar(require("./lt"));
const LU = __importStar(require("./lu"));
const LV = __importStar(require("./lv"));
const MA = __importStar(require("./ma"));
const MC = __importStar(require("./mc"));
const MD = __importStar(require("./md"));
const ME = __importStar(require("./me"));
const MK = __importStar(require("./mk"));
const MT = __importStar(require("./mt"));
const MU = __importStar(require("./mu"));
const MX = __importStar(require("./mx"));
const MY = __importStar(require("./my"));
const NL = __importStar(require("./nl"));
const NO = __importStar(require("./no"));
const NZ = __importStar(require("./nz"));
const PE = __importStar(require("./pe"));
const PK = __importStar(require("./pk"));
const PL = __importStar(require("./pl"));
const PT = __importStar(require("./pt"));
const PY = __importStar(require("./py"));
const RO = __importStar(require("./ro"));
const RS = __importStar(require("./rs"));
const RU = __importStar(require("./ru"));
const SE = __importStar(require("./se"));
const SG = __importStar(require("./sg"));
const SI = __importStar(require("./si"));
const SK = __importStar(require("./sk"));
const SM = __importStar(require("./sm"));
const SV = __importStar(require("./sv"));
const TH = __importStar(require("./th"));
const TR = __importStar(require("./tr"));
const TW = __importStar(require("./tw"));
const UA = __importStar(require("./ua"));
const US = __importStar(require("./us"));
const UY = __importStar(require("./uy"));
const VE = __importStar(require("./ve"));
const VN = __importStar(require("./vn"));
const ZA = __importStar(require("./za"));
exports.stdnum = {
    AD,
    AL,
    AR,
    AT,
    AU,
    AZ,
    BA,
    BE,
    BG,
    BR,
    BY,
    BZ,
    CA,
    CH,
    CL,
    CN,
    CO,
    CR,
    CU,
    CY,
    CZ,
    DE,
    DO,
    DK,
    EC,
    EE,
    ES,
    FI,
    FR,
    GB,
    GR,
    GT,
    HK,
    HR,
    HU,
    ID,
    IE,
    IL,
    IN,
    IS,
    IT,
    LI,
    LT,
    LU,
    LV,
    JP,
    KR,
    MA,
    MC,
    MD,
    ME,
    MK,
    MT,
    MU,
    MX,
    MY,
    NL,
    NO,
    NZ,
    PE,
    PK,
    PL,
    PT,
    PY,
    RO,
    RS,
    RU,
    SE,
    SG,
    SI,
    SK,
    SM,
    SV,
    TH,
    TR,
    TW,
    UA,
    US,
    UY,
    VE,
    VN,
    ZA,
};
exports.personValidators = {
    AD: [AD.nrt],
    AL: [AL.nipt],
    AR: [AR.cuit, AR.dni],
    AT: [AT.vnr],
    AU: [AU.tfn],
    AZ: [AZ.pin, AZ.tin],
    BA: [BA.jmbg],
    BE: [BE.bis, BE.insz, BE.nn],
    BG: [BG.egn, BG.pnf, BG.vat],
    BR: [BR.cpf],
    BY: [BY.unp],
    BZ: [BZ.tin],
    CA: [CA.sin],
    CH: [CH.ssn],
    CL: [CL.run],
    CN: [CN.ric],
    CO: [CO.nit],
    CR: [CR.cpf, CR.cr],
    CU: [CU.ni],
    CZ: [CZ.rc],
    DE: [DE.idnr, DE.svnr],
    DK: [DK.cpr],
    DO: [DO.cedula],
    EC: [EC.ci],
    EE: [EE.ik],
    ES: [ES.dni, ES.nie],
    FI: [FI.hetu],
    FR: [FR.nif, FR.nir],
    GB: [GB.nino, GB.utr],
    GR: [GR.amka],
    GT: [GT.cui],
    HK: [HK.hkid],
    HR: [HR.oib],
    HU: [HU.anum],
    ID: [ID.npwp],
    IE: [IE.pps],
    IL: [IL.idnr],
    IN: [IN.aadhaar],
    IS: [IS.kennitala],
    IT: [IT.codicefiscale],
    KR: [KR.rrn],
    LI: [LI.peid],
    LT: [LT.asmens],
    LV: [LV.pvn],
    ME: [ME.jmbg],
    MK: [MK.jmbg],
    MU: [MU.nid],
    MX: [MX.curp, MX.rfc],
    MY: [MY.nric],
    NL: [NL.onderwijsnummer, NL.bsn],
    NO: [NO.fodselsnummer],
    NZ: [NZ.ird],
    PE: [PE.cui, PE.ce],
    PK: [PK.cnic],
    PL: [PL.pesel],
    PT: [PT.nif],
    PY: [PY.ruc, PY.cedula],
    RO: [RO.cnp],
    RS: [RS.jmbg],
    RU: [RU.inn],
    SE: [SE.personnummer],
    SI: [SI.jmbg],
    SK: [SK.rc],
    SV: [SV.nit],
    TH: [TH.idnr],
    TR: [TR.tckimlik],
    UA: [UA.edrpou],
    US: [US.ssn],
    UY: [UY.nie, UY.cedula],
    ZA: [ZA.tin, ZA.idnr],
};
exports.entityValidators = {
    AD: [AD.nrt],
    AL: [AL.nipt],
    AR: [AR.cuit],
    AT: [AT.businessid, AT.tin, AT.uid],
    AU: [AU.abn, AU.acn, AU.tfn],
    AZ: [AZ.tin],
    BE: [BE.vat],
    BG: [BG.vat],
    BR: [BR.cnpj],
    BY: [BY.unp],
    BZ: [BZ.tin],
    CA: [CA.bn],
    CH: [CH.uid, CH.vat],
    CL: [CL.rut],
    CN: [CN.uscc],
    CO: [CO.nit],
    CR: [CR.cpj],
    CY: [CY.vat],
    CZ: [CZ.dic],
    DE: [DE.stnr, DE.vat],
    DK: [DK.cvr],
    DO: [DO.ncf, DO.rnc],
    EC: [EC.ruc],
    EE: [EE.kmkr, EE.registrikood],
    ES: [ES.cif],
    FI: [FI.alv, FI.ytunnus],
    FR: [FR.siren, FR.siret, FR.tva],
    GB: [GB.vat],
    GR: [GR.vat],
    GT: [GT.nit],
    HU: [HU.anum],
    ID: [ID.npwp],
    IE: [IE.vat],
    IL: [IL.hp],
    IN: [IN.pan],
    IS: [IS.kennitala, IS.vsk],
    IT: [IT.iva],
    JP: [JP.cn],
    KR: [KR.brn],
    LI: [LI.peid],
    LT: [LT.pvm],
    LU: [LU.tva],
    LV: [LV.pvn],
    MC: [MC.tva],
    MD: [MD.idno],
    MA: [MA.ice, MA.ice9],
    MT: [MT.vat],
    MX: [MX.rfc],
    NL: [NL.btw],
    NO: [NO.mva, NO.orgnr],
    NZ: [NZ.ird],
    PE: [PE.ruc],
    PK: [PK.ntn],
    PL: [PL.nip, PL.regon],
    PT: [PT.nipc],
    PY: [PY.ruc],
    RO: [RO.onrc, RO.cui],
    RS: [RS.pib],
    RU: [RU.inn],
    SE: [SE.orgnr, SE.vat],
    SG: [SG.uen],
    SI: [SI.ddv],
    SK: [SK.dph],
    SM: [SM.coe],
    SV: [SV.nit],
    TR: [TR.vkn],
    TW: [TW.ubn],
    UA: [UA.rntrc],
    US: [US.ein],
    UY: [UY.rut],
    VN: [VN.mst],
    ZA: [ZA.tin],
};
exports.euVat = {
    AD: [AD.nrt],
    AT: [AT.uid],
    BE: [BE.vat],
    BG: [BG.vat],
    CH: [CH.vat],
    HR: [HR.oib],
    CY: [CY.vat],
    DE: [DE.vat],
    CZ: [CZ.dic],
    DK: [DK.cvr],
    ES: [ES.nif],
    EE: [EE.kmkr],
    FI: [FI.alv],
    FR: [FR.tva],
    GR: [GR.vat],
    HU: [HU.anum],
    IE: [IE.vat],
    IT: [IT.iva],
    LT: [LT.pvm],
    LU: [LU.tva],
    LV: [LV.pvn],
    MT: [MT.vat],
    NL: [NL.btw],
    PL: [PL.nip],
    PT: [PT.nif],
    RO: [RO.cif],
    SE: [SE.vat],
    SI: [SI.ddv],
    SK: [SK.dph],
};
function validatePerson(country, value) {
    const vset = exports.personValidators[country.toLocaleUpperCase()];
    if (!vset || vset.length === 0) {
        return { checked: false };
    }
    const match = vset.filter(grp => grp.validate(value).isValid);
    return { checked: true, isValid: match.length > 0, matchedValidators: match };
}
exports.validatePerson = validatePerson;
function validateEntity(country, value) {
    const vset = exports.entityValidators[country.toLocaleUpperCase()];
    if (!vset || vset.length === 0) {
        return { checked: false };
    }
    const match = vset.filter(grp => grp.validate(value).isValid);
    return { checked: true, isValid: match.length > 0, matchedValidators: match };
}
exports.validateEntity = validateEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFDM0IseUNBQTJCO0FBQzNCLHlDQUEyQjtBQUMzQix5Q0FBMkI7QUFNZCxRQUFBLE1BQU0sR0FBOEM7SUFDL0QsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtDQUNILENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUFnQztJQUMzRCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDNUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1gsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDaEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUNsQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNmLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDZCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDakIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNmLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDdkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ3RCLENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUFnQztJQUMzRCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUM1QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1gsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDOUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUN4QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1gsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUMxQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN0QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUN0QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNkLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDYixDQUFDO0FBS1csUUFBQSxLQUFLLEdBQWdDO0lBQ2hELEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFD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