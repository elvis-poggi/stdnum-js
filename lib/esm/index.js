import * as AD from './ad';
import * as AL from './al';
import * as AR from './ar';
import * as AT from './at';
import * as AU from './au';
import * as AZ from './az';
import * as BA from './ba';
import * as BE from './be';
import * as BG from './bg';
import * as BR from './br';
import * as BY from './by';
import * as BZ from './bz';
import * as CA from './ca';
import * as CH from './ch';
import * as CL from './cl';
import * as CN from './cn';
import * as CO from './co';
import * as CR from './cr';
import * as CU from './cu';
import * as CY from './cy';
import * as CZ from './cz';
import * as DE from './de';
import * as DK from './dk';
import * as DO from './do';
import * as EC from './ec';
import * as EE from './ee';
import * as ES from './es';
import * as FI from './fi';
import * as FR from './fr';
import * as GB from './gb';
import * as GR from './gr';
import * as GT from './gt';
import * as HK from './hk';
import * as HR from './hr';
import * as HU from './hu';
import * as ID from './id';
import * as IE from './ie';
import * as IL from './il';
import * as IN from './in';
import * as IS from './is';
import * as IT from './it';
import * as JP from './jp';
import * as KR from './kr';
import * as LI from './li';
import * as LT from './lt';
import * as LU from './lu';
import * as LV from './lv';
import * as MA from './ma';
import * as MC from './mc';
import * as MD from './md';
import * as ME from './me';
import * as MK from './mk';
import * as MT from './mt';
import * as MU from './mu';
import * as MX from './mx';
import * as MY from './my';
import * as NL from './nl';
import * as NO from './no';
import * as NZ from './nz';
import * as PE from './pe';
import * as PK from './pk';
import * as PL from './pl';
import * as PT from './pt';
import * as PY from './py';
import * as RO from './ro';
import * as RS from './rs';
import * as RU from './ru';
import * as SE from './se';
import * as SG from './sg';
import * as SI from './si';
import * as SK from './sk';
import * as SM from './sm';
import * as SV from './sv';
import * as TH from './th';
import * as TR from './tr';
import * as TW from './tw';
import * as UA from './ua';
import * as US from './us';
import * as UY from './uy';
import * as VE from './ve';
import * as VN from './vn';
import * as ZA from './za';
export const stdnum = {
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
export const personValidators = {
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
export const entityValidators = {
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
export const euVat = {
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
export function validatePerson(country, value) {
    const vset = personValidators[country.toLocaleUpperCase()];
    if (!vset || vset.length === 0) {
        return { checked: false };
    }
    const match = vset.filter(grp => grp.validate(value).isValid);
    return { checked: true, isValid: match.length > 0, matchedValidators: match };
}
export function validateEntity(country, value) {
    const vset = entityValidators[country.toLocaleUpperCase()];
    if (!vset || vset.length === 0) {
        return { checked: false };
    }
    const match = vset.filter(grp => grp.validate(value).isValid);
    return { checked: true, isValid: match.length > 0, matchedValidators: match };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNM0IsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUE4QztJQUMvRCxFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0NBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFnQztJQUMzRCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDNUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1gsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNyQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDaEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUNsQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNmLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDZCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDakIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNmLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDdkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ3RCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBZ0M7SUFDM0QsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDbkMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDNUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNwQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzlCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDeEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDaEMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNYLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDMUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3JCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN0QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDdEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDckIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDdEIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDZCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2IsQ0FBQztBQUtGLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBZ0M7SUFDaEQsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDYixDQUFDO0FBS0YsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBZSxFQUNmLEtBQWE7SUFFYixNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBRTNELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUMzQjtJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNoRixDQUFDO0FBS0QsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBZSxFQUNmLEtBQWE7SUFFYixNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBRTNELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUMzQjtJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNoRixDQUFDIn0=