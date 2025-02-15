import * as exceptions from '../exceptions';
import { isValidDateCompactYYYYMMDD, strings } from '../util';
import { weightedSum } from '../util/checksum';
function clean(input) {
    return strings.cleanUnicode(input, ' -', 'LV');
}
const impl = {
    name: 'Latvian VAT Number',
    localName: 'Pievienotās Vērtības Nodokļa',
    abbreviation: 'PVN',
    compact(input) {
        const [value, err] = clean(input);
        if (err) {
            throw err;
        }
        return value;
    },
    format(input) {
        const [value] = clean(input);
        if ('0123'.includes(value[0])) {
            return strings.splitAt(value, 6).join('-');
        }
        return strings.splitAt(value, 4, 8).join(' ');
    },
    validate(input) {
        const [value, error] = clean(input);
        if (error) {
            return { isValid: false, error };
        }
        if (value.length !== 11) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isdigits(value)) {
            return { isValid: false, error: new exceptions.InvalidFormat() };
        }
        const isIndividual = '0123'.includes(value[0]);
        if (isIndividual) {
            const [dd, mm, yy, century] = strings.splitAt(value, 2, 4, 6, 7);
            if (!isValidDateCompactYYYYMMDD(`${18 + parseInt(century, 10)}${yy}${mm}${dd}`)) {
                return { isValid: false, error: new exceptions.InvalidComponent() };
            }
            const [front, check] = strings.splitAt(value, -1);
            const sum = 1 +
                weightedSum(front, {
                    weights: [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
                    modulus: 11,
                });
            if (String((sum % 11) % 10) !== check) {
                return { isValid: false, error: new exceptions.InvalidChecksum() };
            }
        }
        else {
            const sum = weightedSum(value, {
                weights: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
                modulus: 11,
            });
            if (sum !== 3) {
                return { isValid: false, error: new exceptions.InvalidChecksum() };
            }
        }
        return {
            isValid: true,
            compact: value,
            isIndividual,
            isCompany: !isIndividual,
        };
    },
};
export const { name, localName, abbreviation, validate, format, compact } = impl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2x2L3B2bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxPQUFPLEtBQUssVUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxTQUFTLEtBQUssQ0FBQyxLQUFhO0lBQzFCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxNQUFNLElBQUksR0FBYztJQUN0QixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLFNBQVMsRUFBRSw4QkFBOEI7SUFDekMsWUFBWSxFQUFFLEtBQUs7SUFDbkIsT0FBTyxDQUFDLEtBQWE7UUFDbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxHQUFHLEVBQUU7WUFDUCxNQUFNLEdBQUcsQ0FBQztTQUNYO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENB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