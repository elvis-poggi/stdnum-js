import * as exceptions from '../exceptions';
import { strings, weightedSum } from '../util';
import { validate as rcValidate } from './rc';
function clean(input) {
    const [value, err] = strings.cleanUnicode(input, ' -');
    if (err !== null) {
        return [value, err];
    }
    if (value.startsWith('CZ')) {
        return [value.substr(2), null];
    }
    return [value, null];
}
function checkLegal(value) {
    const [front, check] = strings.splitAt(value, -1);
    const sum = weightedSum(front, {
        modulus: 11,
        weights: [8, 7, 6, 5, 4, 3, 2, 1],
    });
    const v = (11 - sum) % 11;
    return (v === 0 ? '1' : String(v % 10)) === check;
}
function checkSpecial(value) {
    const [front, check] = strings.splitAt(value, -1);
    const sum = weightedSum(front, {
        modulus: 11,
        weights: [8, 7, 6, 5, 4, 3, 2, 1],
    });
    const digit = String((8 - ((10 - sum) % 11)) % 10);
    return digit === check;
}
const impl = {
    name: 'Czech VAT Number',
    localName: 'Daňové identifikační číslo',
    abbreviation: 'DIČ',
    compact(input) {
        const [value, err] = clean(input);
        if (err) {
            throw err;
        }
        return value;
    },
    format(input) {
        const [value] = clean(input);
        return value;
    },
    validate(input) {
        const [value, error] = clean(input);
        if (error) {
            return { isValid: false, error };
        }
        if (![8, 9, 10].includes(value.length)) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isdigits(value)) {
            return { isValid: false, error: new exceptions.InvalidFormat() };
        }
        if (value.length === 8) {
            if (value.startsWith('9')) {
                return { isValid: false, error: new exceptions.InvalidComponent() };
            }
            if (!checkLegal(value)) {
                return { isValid: false, error: new exceptions.InvalidChecksum() };
            }
            return {
                isValid: true,
                compact: value,
                isIndividual: false,
                isCompany: true,
            };
        }
        if (value.length === 9 && value.startsWith('6')) {
            if (!checkSpecial(value)) {
                return { isValid: false, error: new exceptions.InvalidChecksum() };
            }
            return {
                isValid: true,
                compact: value,
                isIndividual: false,
                isCompany: true,
            };
        }
        return rcValidate(value);
    },
};
export const { name, localName, abbreviation, validate, format, compact } = impl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N6L2RpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSxPQUFPLEtBQUssVUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxJQUFJLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU5QyxTQUFTLEtBQUssQ0FBQyxLQUFhO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckI7SUFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7SUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBQy9CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRCxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQyxDQUFDLENBQUM7SUFFSCxN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