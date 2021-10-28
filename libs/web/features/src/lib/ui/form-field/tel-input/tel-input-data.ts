import { CountryCode } from 'libphonenumber-js';

export interface ICountryPhoneData {
  name: string,
  code: string;
  iso: string;
  flag: string,
  mask: string[] | string;
  order?: number;
}
export const countryPhoneData: ICountryPhoneData[] = [
  {
    "name": "Afghanistan",
    "code": "+93",
    "iso": "AF",
    "flag": "//www.countryflags.io/AF/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Aland Islands",
    "code": "+358",
    "iso": "AX",
    "flag": "//www.countryflags.io/AX/flat/24.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "Albania",
    "code": "+355",
    "iso": "AL",
    "flag": "//www.countryflags.io/AL/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Algeria",
    "code": "+213",
    "iso": "DZ",
    "flag": "//www.countryflags.io/DZ/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "American Samoa",
    "code": "+1",
    "iso": "AS",
    "flag": "//www.countryflags.io/AS/flat/24.png",
    "order": 999,
    "mask": "(684)000-0000"
  },
  {
    "name": "Andorra",
    "code": "+376",
    "iso": "AD",
    "flag": "//www.countryflags.io/AD/flat/24.png",
    "order": 999,
    "mask": "000-000"
  },
  {
    "name": "Angola",
    "code": "+244",
    "iso": "AO",
    "flag": "//www.countryflags.io/AO/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Anguilla",
    "code": "+1",
    "iso": "AI",
    "flag": "//www.countryflags.io/AI/flat/24.png",
    "order": 999,
    "mask": "(224)000-0000"
  },
  {
    "name": "Antarctica",
    "code": "+672",
    "iso": "AQ",
    "flag": "//www.countryflags.io/AQ/flat/24.png",
    "order": 999,
    "mask": "100-000"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "+1",
    "iso": "AG",
    "flag": "//www.countryflags.io/AG/flat/24.png",
    "order": 999,
    "mask": "(268)000-0000"
  },
  {
    "name": "Argentina",
    "code": "+54",
    "iso": "AR",
    "flag": "//www.countryflags.io/AR/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Armenia",
    "code": "+374",
    "iso": "AM",
    "flag": "//www.countryflags.io/AM/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Aruba",
    "code": "+297",
    "iso": "AW",
    "flag": "//www.countryflags.io/AW/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Ascension Island",
    "code": "+247",
    "iso": "AC",
    "flag": "//www.countryflags.io/SH/flat/24.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Australia",
    "code": "+61",
    "iso": "AU",
    "flag": "//www.countryflags.io/AU/flat/24.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Austria",
    "code": "+43",
    "iso": "AT",
    "flag": "//www.countryflags.io/AT/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Azerbaijan",
    "code": "+994",
    "iso": "AZ",
    "flag": "//www.countryflags.io/AZ/flat/24.png",
    "order": 999,
    "mask": "00-000-00-00"
  },
  {
    "name": "Bahamas",
    "code": "+1",
    "iso": "BS",
    "flag": "//www.countryflags.io/BS/flat/24.png",
    "order": 999,
    "mask": "(242)000-0000"
  },
  {
    "name": "Bahrain",
    "code": "+973",
    "iso": "BH",
    "flag": "//www.countryflags.io/BH/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Bangladesh",
    "code": "+880",
    "iso": "BD",
    "flag": "//www.countryflags.io/BD/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Barbados",
    "code": "+1",
    "iso": "BB",
    "flag": "//www.countryflags.io/BB/flat/24.png",
    "order": 999,
    "mask": "(246)000-0000"
  },
  {
    "name": "Belarus",
    "code": "+375",
    "iso": "BY",
    "flag": "//www.countryflags.io/BY/flat/24.png",
    "order": 999,
    "mask": "(00)000-00-00"
  },
  {
    "name": "Belgium",
    "code": "+32",
    "iso": "BE",
    "flag": "//www.countryflags.io/BE/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Belize",
    "code": "+501",
    "iso": "BZ",
    "flag": "//www.countryflags.io/BZ/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Benin",
    "code": "+229",
    "iso": "BJ",
    "flag": "//www.countryflags.io/BJ/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Bermuda",
    "code": "+1",
    "iso": "BM",
    "flag": "//www.countryflags.io/BM/flat/24.png",
    "order": 999,
    "mask": "(441)000-0000"
  },
  {
    "name": "Bhutan",
    "code": "+975",
    "iso": "BT",
    "flag": "//www.countryflags.io/BT/flat/24.png",
    "order": 999,
    "mask": [
      "17-000-000",
      "0-000-000"
    ]
  },
  {
    "name": "Bolivia",
    "code": "+591",
    "iso": "BO",
    "flag": "//www.countryflags.io/BO/flat/24.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "+387",
    "iso": "BA",
    "flag": "//www.countryflags.io/BA/flat/24.png",
    "order": 999,
    "mask": [
      "00-0000",
      "00-00000"
    ]
  },
  {
    "name": "Botswana",
    "code": "+267",
    "iso": "BW",
    "flag": "//www.countryflags.io/BW/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Brazil",
    "code": "+55",
    "iso": "BR",
    "flag": "//www.countryflags.io/BR/flat/24.png",
    "order": 999,
    "mask": [
      "(00)0000-0000",
      "(00)00000-0000"
    ]
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "+246",
    "iso": "IO",
    "flag": "//www.countryflags.io/IO/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Brunei Darussalam",
    "code": "+673",
    "iso": "BN",
    "flag": "//www.countryflags.io/BN/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Bulgaria",
    "code": "+359",
    "iso": "BG",
    "flag": "//www.countryflags.io/BG/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Burkina Faso",
    "code": "+226",
    "iso": "BF",
    "flag": "//www.countryflags.io/BF/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Burundi",
    "code": "+257",
    "iso": "BI",
    "flag": "//www.countryflags.io/BI/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Cambodia",
    "code": "+855",
    "iso": "KH",
    "flag": "//www.countryflags.io/KH/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Cameroon",
    "code": "+237",
    "iso": "CM",
    "flag": "//www.countryflags.io/CM/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Canada",
    "code": "+1",
    "iso": "CA",
    "flag": "//www.countryflags.io/CA/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Cape Verde",
    "code": "+238",
    "iso": "CV",
    "flag": "//www.countryflags.io/CV/flat/24.png",
    "order": 999,
    "mask": "(000)00-00"
  },
  {
    "name": "Cayman Islands",
    "code": "+1",
    "iso": "KY",
    "flag": "//www.countryflags.io/KY/flat/24.png",
    "order": 999,
    "mask": "(345)000-0000"
  },
  {
    "name": "Central African Republic",
    "code": "+236",
    "iso": "CF",
    "flag": "//www.countryflags.io/CF/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Chad",
    "code": "+235",
    "iso": "TD",
    "flag": "//www.countryflags.io/TD/flat/24.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Chile",
    "code": "+56",
    "iso": "CL",
    "flag": "//www.countryflags.io/CL/flat/24.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "China",
    "code": "+86",
    "iso": "CN",
    "flag": "//www.countryflags.io/CN/flat/24.png",
    "order": 999,
    "mask": [
      "(000)0000-000",
      "(000)0000-0000",
      "00-00000-00000"
    ]
  },
  {
    "name": "Christmas Island",
    "code": "+61",
    "iso": "CX",
    "flag": "//www.countryflags.io/CX/flat/24.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "+61",
    "iso": "CC",
    "flag": "//www.countryflags.io/CC/flat/24.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Colombia",
    "code": "+57",
    "iso": "CO",
    "flag": "//www.countryflags.io/CO/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Comoros",
    "code": "+269",
    "iso": "KM",
    "flag": "//www.countryflags.io/KM/flat/24.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Congo",
    "code": "+242",
    "iso": "CG",
    "flag": "//www.countryflags.io/CG/flat/24.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Cook Islands",
    "code": "+682",
    "iso": "CK",
    "flag": "//www.countryflags.io/CK/flat/24.png",
    "order": 999,
    "mask": "00-000"
  },
  {
    "name": "Costa Rica",
    "code": "+506",
    "iso": "CR",
    "flag": "//www.countryflags.io/CR/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Croatia",
    "code": "+385",
    "iso": "HR",
    "flag": "//www.countryflags.io/HR/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Cuba",
    "code": "+53",
    "iso": "CU",
    "flag": "//www.countryflags.io/CU/flat/24.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Cyprus",
    "code": "+357",
    "iso": "CY",
    "flag": "//www.countryflags.io/CY/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Czech Republic",
    "code": "+420",
    "iso": "CZ",
    "flag": "//www.countryflags.io/CZ/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "+243",
    "iso": "CD",
    "flag": "//www.countryflags.io/CD/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Denmark",
    "code": "+45",
    "iso": "DK",
    "flag": "//www.countryflags.io/DK/flat/24.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Djibouti",
    "code": "+253",
    "iso": "DJ",
    "flag": "//www.countryflags.io/DJ/flat/24.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Dominica",
    "code": "+1",
    "iso": "DM",
    "flag": "//www.countryflags.io/DM/flat/24.png",
    "order": 999,
    "mask": "(767)000-0000"
  },
  {
    "name": "Dominican Republic",
    "code": "+1",
    "iso": "DO",
    "flag": "//www.countryflags.io/DO/flat/24.png",
    "order": 999,
    "mask": [
      "(809)000-0000",
      "(829)000-0000",
      "(849)000-0000"
    ]
  },
  {
    "name": "Ecuador",
    "code": "+593",
    "iso": "EC",
    "flag": "//www.countryflags.io/EC/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-0000",
      "00-000-0000"
    ]
  },
  {
    "name": "Egypt",
    "code": "+20",
    "iso": "EG",
    "flag": "//www.countryflags.io/EG/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "El Salvador",
    "code": "+503",
    "iso": "SV",
    "flag": "//www.countryflags.io/SV/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Equatorial Guinea",
    "code": "+240",
    "iso": "GQ",
    "flag": "//www.countryflags.io/GQ/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Eritrea",
    "code": "+291",
    "iso": "ER",
    "flag": "//www.countryflags.io/ER/flat/24.png",
    "order": 999,
    "mask": "0-000-000"
  },
  {
    "name": "Estonia",
    "code": "+372",
    "iso": "EE",
    "flag": "//www.countryflags.io/EE/flat/24.png",
    "order": 999,
    "mask": [
      "000-0000",
      "0000-0000"
    ]
  },
  {
    "name": "Eswatini",
    "code": "+268",
    "iso": "SZ",
    "flag": "//www.countryflags.io/SZ/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Ethiopia",
    "code": "+251",
    "iso": "ET",
    "flag": "//www.countryflags.io/ET/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "code": "+500",
    "iso": "FK",
    "flag": "//www.countryflags.io/FK/flat/24.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "Faroe Islands",
    "code": "+298",
    "iso": "FO",
    "flag": "//www.countryflags.io/FO/flat/24.png",
    "order": 999,
    "mask": "000-000"
  },
  {
    "name": "Fiji",
    "code": "+679",
    "iso": "FJ",
    "flag": "//www.countryflags.io/FJ/flat/24.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Finland",
    "code": "+358",
    "iso": "FI",
    "flag": "//www.countryflags.io/FI/flat/24.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "France",
    "code": "+33",
    "iso": "FR",
    "flag": "//www.countryflags.io/FR/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "French Guiana",
    "code": "+594",
    "iso": "GF",
    "flag": "//www.countryflags.io/GF/flat/24.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "French Polynesia",
    "code": "+689",
    "iso": "PF",
    "flag": "//www.countryflags.io/PF/flat/24.png",
    "order": 999,
    "mask": "00-00-00"
  },
  {
    "name": "Gabon",
    "code": "+241",
    "iso": "GA",
    "flag": "//www.countryflags.io/GA/flat/24.png",
    "order": 999,
    "mask": "0-00-00-00"
  },
  {
    "name": "Gambia",
    "code": "+220",
    "iso": "GM",
    "flag": "//www.countryflags.io/GM/flat/24.png",
    "order": 999,
    "mask": "(000)00-00"
  },
  {
    "name": "Georgia",
    "code": "+995",
    "iso": "GE",
    "flag": "//www.countryflags.io/GE/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Germany",
    "code": "+49",
    "iso": "DE",
    "flag": "//www.countryflags.io/DE/flat/24.png",
    "order": 999,
    "mask": [
      "000-000",
      "(000)00-00",
      "(000)00-000",
      "(000)00-0000",
      "(000)000-0000",
      "(0000)000-0000"
    ]
  },
  {
    "name": "Ghana",
    "code": "+233",
    "iso": "GH",
    "flag": "//www.countryflags.io/GH/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Gibraltar",
    "code": "+350",
    "iso": "GI",
    "flag": "//www.countryflags.io/GI/flat/24.png",
    "order": 999,
    "mask": "000-00000"
  },
  {
    "name": "Greece",
    "code": "+30",
    "iso": "GR",
    "flag": "//www.countryflags.io/GR/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Greenland",
    "code": "+299",
    "iso": "GL",
    "flag": "//www.countryflags.io/GL/flat/24.png",
    "order": 999,
    "mask": "00-00-00"
  },
  {
    "name": "Grenada",
    "code": "+1",
    "iso": "GD",
    "flag": "//www.countryflags.io/GD/flat/24.png",
    "order": 999,
    "mask": "(473)000-0000"
  },
  {
    "name": "Guadeloupe",
    "code": "+590",
    "iso": "GP",
    "flag": "//www.countryflags.io/GP/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Guam",
    "code": "+1",
    "iso": "GU",
    "flag": "//www.countryflags.io/GU/flat/24.png",
    "order": 999,
    "mask": "(671)000-0000"
  },
  {
    "name": "Guatemala",
    "code": "+502",
    "iso": "GT",
    "flag": "//www.countryflags.io/GT/flat/24.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Guernsey",
    "code": "+44",
    "iso": "GG",
    "flag": "//www.countryflags.io/GG/flat/24.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Guinea",
    "code": "+224",
    "iso": "GN",
    "flag": "//www.countryflags.io/GN/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Guinea-Bissau",
    "code": "+245",
    "iso": "GW",
    "flag": "//www.countryflags.io/GW/flat/24.png",
    "order": 999,
    "mask": "0-000000"
  },
  {
    "name": "Guyana",
    "code": "+592",
    "iso": "GY",
    "flag": "//www.countryflags.io/GY/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Haiti",
    "code": "+509",
    "iso": "HT",
    "flag": "//www.countryflags.io/HT/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Holy See (Vatican City State)",
    "code": "+39",
    "iso": "VA",
    "flag": "//www.countryflags.io/VA/flat/24.png",
    "order": 999,
    "mask": "06 69800000"
  },
  {
    "name": "Honduras",
    "code": "+504",
    "iso": "HN",
    "flag": "//www.countryflags.io/HN/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Hong Kong",
    "code": "+852",
    "iso": "HK",
    "flag": "//www.countryflags.io/HK/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Hungary",
    "code": "+36",
    "iso": "HU",
    "flag": "//www.countryflags.io/HU/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Iceland",
    "code": "+354",
    "iso": "IS",
    "flag": "//www.countryflags.io/IS/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "India",
    "code": "+91",
    "iso": "IN",
    "flag": "//www.countryflags.io/IN/flat/24.png",
    "order": 999,
    "mask": "(0000)000-000"
  },
  {
    "name": "Indonesia",
    "code": "+62",
    "iso": "ID",
    "flag": "//www.countryflags.io/ID/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-00",
      "00-000-000",
      "00-000-0000",
      "(800)000-000",
      "(800)000-00-000"
    ]
  },
  {
    "name": "Iran",
    "code": "+98",
    "iso": "IR",
    "flag": "//www.countryflags.io/IR/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Iraq",
    "code": "+924",
    "iso": "IQ",
    "flag": "//www.countryflags.io/IQ/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Ireland",
    "code": "+353",
    "iso": "IE",
    "flag": "//www.countryflags.io/IE/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Isle of Man",
    "code": "+44",
    "iso": "IM",
    "flag": "//www.countryflags.io/IM/flat/24.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Israel",
    "code": "+972",
    "iso": "IL",
    "flag": "//www.countryflags.io/IL/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-0000",
      "50-000-0000"
    ]
  },
  {
    "name": "Italy",
    "code": "+39",
    "iso": "IT",
    "flag": "//www.countryflags.io/IT/flat/24.png",
    "order": 999,
    "mask": "(000)0000-000"
  },
  {
    "name": "Ivory Coast / Cote d'Ivoire",
    "code": "+225",
    "iso": "CI",
    "flag": "//www.countryflags.io/CI/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Jamaica",
    "code": "+1",
    "iso": "JM",
    "flag": "//www.countryflags.io/JM/flat/24.png",
    "order": 999,
    "mask": "(876)000-0000"
  },
  {
    "name": "Japan",
    "code": "+81",
    "iso": "JP",
    "flag": "//www.countryflags.io/JP/flat/24.png",
    "order": 999,
    "mask": [
      "(000)000-000",
      "00-0000-0000"
    ]
  },
  {
    "name": "Jersey",
    "code": "+44",
    "iso": "JE",
    "flag": "//www.countryflags.io/JE/flat/24.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Jordan",
    "code": "+962",
    "iso": "JO",
    "flag": "//www.countryflags.io/JO/flat/24.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Kazakhstan",
    "code": "+77",
    "iso": "KZ",
    "flag": "//www.countryflags.io/KZ/flat/24.png",
    "order": 999,
    "mask": [
      "(000)000-00-00",
    ]
  },
  {
    "name": "Kenya",
    "code": "+254",
    "iso": "KE",
    "flag": "//www.countryflags.io/KE/flat/24.png",
    "order": 999,
    "mask": "000-000000"
  },
  {
    "name": "Kiribati",
    "code": "+686",
    "iso": "KI",
    "flag": "//www.countryflags.io/KI/flat/24.png",
    "order": 999,
    "mask": "00-000"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "code": "+850",
    "iso": "KP",
    "flag": "//www.countryflags.io/KP/flat/24.png",
    "order": 999,
    "mask": [
      "000-000",
      "0000-0000",
      "00-000-000",
      "000-0000-000",
      "191-000-0000",
      "0000-0000000000000"
    ]
  },
  {
    "name": "Korea, Republic of South Korea",
    "code": "+82",
    "iso": "KR",
    "flag": "//www.countryflags.io/KR/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Kosovo",
    "code": "+383",
    "iso": "XK",
    "flag": "//www.countryflags.io/XK/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-000",
      "000-000-000"
    ]
  },
  {
    "name": "Kuwait",
    "code": "+965",
    "iso": "KW",
    "flag": "//www.countryflags.io/KW/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Kyrgyzstan",
    "code": "+996",
    "iso": "KG",
    "flag": "//www.countryflags.io/KG/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Laos",
    "code": "+856",
    "iso": "LA",
    "flag": "//www.countryflags.io/LA/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-000",
      "(2000)000-000"
    ]
  },
  {
    "name": "Latvia",
    "code": "+371",
    "iso": "LV",
    "flag": "//www.countryflags.io/LV/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Lebanon",
    "code": "+961",
    "iso": "LB",
    "flag": "//www.countryflags.io/LB/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-000",
      "00-000-000"
    ]
  },
  {
    "name": "Lesotho",
    "code": "+266",
    "iso": "LS",
    "flag": "//www.countryflags.io/LS/flat/24.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Liberia",
    "code": "+231",
    "iso": "LR",
    "flag": "//www.countryflags.io/LR/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Libya",
    "code": "+218",
    "iso": "LY",
    "flag": "//www.countryflags.io/LY/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-000",
      "21-000-0000"
    ]
  },
  {
    "name": "Liechtenstein",
    "code": "+423",
    "iso": "LI",
    "flag": "//www.countryflags.io/LI/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Lithuania",
    "code": "+370",
    "iso": "LT",
    "flag": "//www.countryflags.io/LT/flat/24.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Luxembourg",
    "code": "+352",
    "iso": "LU",
    "flag": "//www.countryflags.io/LU/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Macau",
    "code": "+853",
    "iso": "MO",
    "flag": "//www.countryflags.io/MO/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Madagascar",
    "code": "+261",
    "iso": "MG",
    "flag": "//www.countryflags.io/MG/flat/24.png",
    "order": 999,
    "mask": "00-00-00000"
  },
  {
    "name": "Malawi",
    "code": "+265",
    "iso": "MW",
    "flag": "//www.countryflags.io/MW/flat/24.png",
    "order": 999,
    "mask": [
      "1-000-000",
      "0-0000-0000"
    ]
  },
  {
    "name": "Malaysia",
    "code": "+60",
    "iso": "MY",
    "flag": "//www.countryflags.io/MY/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-000",
      "00-000-000",
      "(000)000-000",
      "00-000-0000"
    ]
  },
  {
    "name": "Maldives",
    "code": "+960",
    "iso": "MV",
    "flag": "//www.countryflags.io/MV/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Mali",
    "code": "+223",
    "iso": "ML",
    "flag": "//www.countryflags.io/ML/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Malta",
    "code": "+356",
    "iso": "MT",
    "flag": "//www.countryflags.io/MT/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Marshall Islands",
    "code": "+692",
    "iso": "MH",
    "flag": "//www.countryflags.io/MH/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Martinique",
    "code": "+596",
    "iso": "MQ",
    "flag": "//www.countryflags.io/MQ/flat/24.png",
    "order": 999,
    "mask": "(000)00-00-00"
  },
  {
    "name": "Mauritania",
    "code": "+222",
    "iso": "MR",
    "flag": "//www.countryflags.io/MR/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Mauritius",
    "code": "+230",
    "iso": "MU",
    "flag": "//www.countryflags.io/MU/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Mayotte",
    "code": "+262",
    "iso": "YT",
    "flag": "//www.countryflags.io/YT/flat/24.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "Mexico",
    "code": "+52",
    "iso": "MX",
    "flag": "//www.countryflags.io/MX/flat/24.png",
    "order": 999,
    "mask": [
      "00-00-0000",
      "(000)000-0000"
    ]
  },
  {
    "name": "Micronesia, Federated States of Micronesia",
    "code": "+691",
    "iso": "FM",
    "flag": "//www.countryflags.io/FM/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Moldova",
    "code": "+373",
    "iso": "MD",
    "flag": "//www.countryflags.io/MD/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Monaco",
    "code": "+377",
    "iso": "MC",
    "flag": "//www.countryflags.io/MC/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-000",
      "(000)000-000"
    ]
  },
  {
    "name": "Mongolia",
    "code": "+976",
    "iso": "MN",
    "flag": "//www.countryflags.io/MN/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Montenegro",
    "code": "+382",
    "iso": "ME",
    "flag": "//www.countryflags.io/ME/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Montserrat",
    "code": "+1",
    "iso": "MS",
    "flag": "//www.countryflags.io/MS/flat/24.png",
    "order": 999,
    "mask": "(624)000-0000"
  },
  {
    "name": "Morocco",
    "code": "+212",
    "iso": "MA",
    "flag": "//www.countryflags.io/MA/flat/24.png",
    "order": 999,
    "mask": "00-0000-000"
  },
  {
    "name": "Mozambique",
    "code": "+258",
    "iso": "MZ",
    "flag": "//www.countryflags.io/MZ/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Myanmar",
    "code": "+95",
    "iso": "MM",
    "flag": "//www.countryflags.io/MM/flat/24.png",
    "order": 999,
    "mask": [
      "000-000",
      "0-000-000",
      "00-000-000"
    ]
  },
  {
    "name": "Namibia",
    "code": "+224",
    "iso": "NA",
    "flag": "//www.countryflags.io/NA/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Nauru",
    "code": "+674",
    "iso": "NR",
    "flag": "//www.countryflags.io/NR/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Nepal",
    "code": "+977",
    "iso": "NP",
    "flag": "//www.countryflags.io/NP/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Netherlands",
    "code": "+31",
    "iso": "NL",
    "flag": "//www.countryflags.io/NL/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Netherlands Antilles",
    "code": "+599",
    "iso": "AN",
    "flag": "//www.countryflags.io/AN/flat/24.png",
    "order": 999,
    "mask": [
      "000-0000",
      "9000-0000"
    ]
  },
  {
    "name": "New Caledonia",
    "code": "+687",
    "iso": "NC",
    "flag": "//www.countryflags.io/NC/flat/24.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "New Zealand",
    "code": "+24",
    "iso": "NZ",
    "flag": "//www.countryflags.io/NZ/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-000",
      "(000)000-000",
      "(000)000-0000"
    ]
  },
  {
    "name": "Nicaragua",
    "code": "+505",
    "iso": "NI",
    "flag": "//www.countryflags.io/NI/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Niger",
    "code": "+227",
    "iso": "NE",
    "flag": "//www.countryflags.io/NE/flat/24.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Nigeria",
    "code": "+234",
    "iso": "NG",
    "flag": "//www.countryflags.io/NG/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-00",
      "00-000-000",
      "(000)000-0000"
    ]
  },
  {
    "name": "Niue",
    "code": "+683",
    "iso": "NU",
    "flag": "//www.countryflags.io/NU/flat/24.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Norfolk Island",
    "code": "+672",
    "iso": "NF",
    "flag": "//www.countryflags.io/NF/flat/24.png",
    "order": 999,
    "mask": "300-000"
  },
  {
    "name": "North Macedonia",
    "code": "+389",
    "iso": "MK",
    "flag": "//www.countryflags.io/MK/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "+1",
    "iso": "MP",
    "flag": "//www.countryflags.io/MP/flat/24.png",
    "order": 999,
    "mask": "(670)000-0000"
  },
  {
    "name": "Norway",
    "code": "+47",
    "iso": "NO",
    "flag": "//www.countryflags.io/NO/flat/24.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Oman",
    "code": "+968",
    "iso": "OM",
    "flag": "//www.countryflags.io/OM/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Pakistan",
    "code": "+92",
    "iso": "PK",
    "flag": "//www.countryflags.io/PK/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Palau",
    "code": "+680",
    "iso": "PW",
    "flag": "//www.countryflags.io/PW/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Palestine",
    "code": "+970",
    "iso": "PS",
    "flag": "//www.countryflags.io/PS/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Panama",
    "code": "+507",
    "iso": "PA",
    "flag": "//www.countryflags.io/PA/flat/24.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Papua New Guinea",
    "code": "+675",
    "iso": "PG",
    "flag": "//www.countryflags.io/PG/flat/24.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Paraguay",
    "code": "+595",
    "iso": "PY",
    "flag": "//www.countryflags.io/PY/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Peru",
    "code": "+51",
    "iso": "PE",
    "flag": "//www.countryflags.io/PE/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Philippines",
    "code": "+63",
    "iso": "PH",
    "flag": "//www.countryflags.io/PH/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Pitcairn",
    "code": "+870",
    "iso": "PN",
    "flag": "//www.countryflags.io/PN/flat/24.png",
    "order": 999,
    "mask": "000-000-000"
  },
  {
    "name": "Poland",
    "code": "+48",
    "iso": "PL",
    "flag": "//www.countryflags.io/PL/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Portugal",
    "code": "+351",
    "iso": "PT",
    "flag": "//www.countryflags.io/PT/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Puerto Rico",
    "code": "+1",
    "iso": "PR",
    "flag": "//www.countryflags.io/PR/flat/24.png",
    "order": 999,
    "mask": [
      "(787) 000 0000",
      "(939) 000 0000"
    ]
  },
  {
    "name": "Qatar",
    "code": "+974",
    "iso": "QA",
    "flag": "//www.countryflags.io/QA/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Reunion",
    "code": "+262",
    "iso": "RE",
    "flag": "//www.countryflags.io/RE/flat/24.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "Romania",
    "code": "+40",
    "iso": "RO",
    "flag": "//www.countryflags.io/RO/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Russia",
    "code": "+7",
    "iso": "RU",
    "flag": "//www.countryflags.io/RU/flat/24.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "Rwanda",
    "code": "+250",
    "iso": "RW",
    "flag": "//www.countryflags.io/RW/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Saint Barthelemy",
    "code": "+590",
    "iso": "BL",
    "flag": "//www.countryflags.io/BL/flat/24.png",
    "order": 999,
    "mask": "000-00-00-00"
  },
  {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "code": "+290",
    "iso": "SH",
    "flag": "//www.countryflags.io/SH/flat/24.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "+1",
    "iso": "KN",
    "flag": "//www.countryflags.io/KN/flat/24.png",
    "order": 999,
    "mask": "(869)000-0000"
  },
  {
    "name": "Saint Lucia",
    "code": "+1",
    "iso": "LC",
    "flag": "//www.countryflags.io/LC/flat/24.png",
    "order": 999,
    "mask": "(758)000-0000"
  },
  {
    "name": "Saint Martin",
    "code": "+590",
    "iso": "MF",
    "flag": "//www.countryflags.io/MF/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "+508",
    "iso": "PM",
    "flag": "//www.countryflags.io/PM/flat/24.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "+1",
    "iso": "VC",
    "flag": "//www.countryflags.io/VC/flat/24.png",
    "order": 999,
    "mask": "(784)000-0000"
  },
  {
    "name": "Samoa",
    "code": "+685",
    "iso": "WS",
    "flag": "//www.countryflags.io/WS/flat/24.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "San Marino",
    "code": "+378",
    "iso": "SM",
    "flag": "//www.countryflags.io/SM/flat/24.png",
    "order": 999,
    "mask": "0000-000000"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "+239",
    "iso": "ST",
    "flag": "//www.countryflags.io/ST/flat/24.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Saudi Arabia",
    "code": "+966",
    "iso": "SA",
    "flag": "//www.countryflags.io/SA/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-0000",
      "50-0000-0000"
    ]
  },
  {
    "name": "Senegal",
    "code": "+221",
    "iso": "SN",
    "flag": "//www.countryflags.io/SN/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Serbia",
    "code": "+381",
    "iso": "RS",
    "flag": "//www.countryflags.io/RS/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Seychelles",
    "code": "+248",
    "iso": "SC",
    "flag": "//www.countryflags.io/SC/flat/24.png",
    "order": 999,
    "mask": "0-000-000"
  },
  {
    "name": "Sierra Leone",
    "code": "+232",
    "iso": "SL",
    "flag": "//www.countryflags.io/SL/flat/24.png",
    "order": 999,
    "mask": "00-000000"
  },
  {
    "name": "Singapore",
    "code": "+65",
    "iso": "SG",
    "flag": "//www.countryflags.io/SG/flat/24.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Sint Maarten",
    "code": "+1",
    "iso": "SX",
    "flag": "//www.countryflags.io/SX/flat/24.png",
    "order": 999,
    "mask": "(721)000-0000"
  },
  {
    "name": "Slovakia",
    "code": "+421",
    "iso": "SK",
    "flag": "//www.countryflags.io/SK/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Slovenia",
    "code": "+386",
    "iso": "SI",
    "flag": "//www.countryflags.io/SI/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Solomon Islands",
    "code": "+677",
    "iso": "SB",
    "flag": "//www.countryflags.io/SB/flat/24.png",
    "order": 999,
    "mask": [
      "00000",
      "000-0000"
    ]
  },
  {
    "name": "Somalia",
    "code": "+252",
    "iso": "SO",
    "flag": "//www.countryflags.io/SO/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-000",
      "00-000-000"
    ]
  },
  {
    "name": "South Africa",
    "code": "+27",
    "iso": "ZA",
    "flag": "//www.countryflags.io/ZA/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "+500",
    "iso": "GS",
    "flag": "//www.countryflags.io/GS/flat/24.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "South Sudan",
    "code": "+211",
    "iso": "SS",
    "flag": "//www.countryflags.io/SS/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Spain",
    "code": "+34",
    "iso": "ES",
    "flag": "//www.countryflags.io/ES/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Sri Lanka",
    "code": "+94",
    "iso": "LK",
    "flag": "//www.countryflags.io/LK/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Sudan",
    "code": "+249",
    "iso": "SD",
    "flag": "//www.countryflags.io/SD/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Suriname",
    "code": "+597",
    "iso": "SR",
    "flag": "//www.countryflags.io/SR/flat/24.png",
    "order": 999,
    "mask": [
      "000-000",
      "000-0000"
    ]
  },
  {
    "name": "Svalbard and Jan Mayen",
    "code": "+47",
    "iso": "SJ",
    "flag": "//www.countryflags.io/SJ/flat/24.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Sweden",
    "code": "+46",
    "iso": "SE",
    "flag": "//www.countryflags.io/SE/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Switzerland",
    "code": "+41",
    "iso": "CH",
    "flag": "//www.countryflags.io/CH/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Syrian Arab Republic",
    "code": "+963",
    "iso": "SY",
    "flag": "//www.countryflags.io/SY/flat/24.png",
    "order": 999,
    "mask": "00-0000-000"
  },
  {
    "name": "Taiwan",
    "code": "+886",
    "iso": "TW",
    "flag": "//www.countryflags.io/TW/flat/24.png",
    "order": 999,
    "mask": [
      "0000-0000",
      "0-0000-0000"
    ]
  },
  {
    "name": "Tajikistan",
    "code": "+992",
    "iso": "TJ",
    "flag": "//www.countryflags.io/TJ/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "code": "+255",
    "iso": "TZ",
    "flag": "//www.countryflags.io/TZ/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Thailand",
    "code": "+66",
    "iso": "TH",
    "flag": "//www.countryflags.io/TH/flat/24.png",
    "order": 999,
    "mask": [
      "00-000-000",
      "00-000-0000"
    ]
  },
  {
    "name": "Timor-Leste",
    "code": "+670",
    "iso": "TL",
    "flag": "//www.countryflags.io/TL/flat/24.png",
    "order": 999,
    "mask": [
      "000-0000",
      "770-00000",
      "780-00000"
    ]
  },
  {
    "name": "Togo",
    "code": "+228",
    "iso": "TG",
    "flag": "//www.countryflags.io/TG/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Tokelau",
    "code": "+690",
    "iso": "TK",
    "flag": "//www.countryflags.io/TK/flat/24.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Tonga",
    "code": "+676",
    "iso": "TO",
    "flag": "//www.countryflags.io/TO/flat/24.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "+1",
    "iso": "TT",
    "flag": "//www.countryflags.io/TT/flat/24.png",
    "order": 999,
    "mask": "(868)000-0000"
  },
  {
    "name": "Tunisia",
    "code": "+216",
    "iso": "TN",
    "flag": "//www.countryflags.io/TN/flat/24.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Turkey",
    "code": "+90",
    "iso": "TR",
    "flag": "//www.countryflags.io/TR/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Turkmenistan",
    "code": "+993",
    "iso": "TM",
    "flag": "//www.countryflags.io/TM/flat/24.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "+1",
    "iso": "TC",
    "flag": "//www.countryflags.io/TC/flat/24.png",
    "order": 999,
    "mask": "(249)000-000"
  },
  {
    "name": "Tuvalu",
    "code": "+688",
    "iso": "TV",
    "flag": "//www.countryflags.io/TV/flat/24.png",
    "order": 999,
    "mask": [
      "20000",
      "900000"
    ]
  },
  {
    "name": "Uganda",
    "code": "+256",
    "iso": "UG",
    "flag": "//www.countryflags.io/UG/flat/24.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Ukraine",
    "code": "+380",
    "iso": "UA",
    "flag": "//www.countryflags.io/UA/flat/24.png",
    "order": 999,
    "mask": "(00)000-00-00"
  },
  {
    "name": "United Arab Emirates",
    "code": "+971",
    "iso": "AE",
    "flag": "//www.countryflags.io/AE/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-0000",
      "50-000-0000"
    ]
  },
  {
    "name": "United Kingdom",
    "code": "+44",
    "iso": "GB",
    "flag": "//www.countryflags.io/GB/flat/24.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "United States",
    "code": "+1",
    "iso": "US",
    "flag": "//www.countryflags.io/US/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Uruguay",
    "code": "+598",
    "iso": "UY",
    "flag": "//www.countryflags.io/UY/flat/24.png",
    "order": 999,
    "mask": "0-000-00-00"
  },
  {
    "name": "Uzbekistan",
    "code": "+998",
    "iso": "UZ",
    "flag": "//www.countryflags.io/UZ/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Vanuatu",
    "code": "+678",
    "iso": "VU",
    "flag": "//www.countryflags.io/VU/flat/24.png",
    "order": 999,
    "mask": [
      "00000",
      "00-00000"
    ]
  },
  {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "code": "+58",
    "iso": "VE",
    "flag": "//www.countryflags.io/VE/flat/24.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Vietnam",
    "code": "+84",
    "iso": "VN",
    "flag": "//www.countryflags.io/VN/flat/24.png",
    "order": 999,
    "mask": [
      "00-0000-000",
      "(000)0000-000"
    ]
  },
  {
    "name": "Virgin Islands, British",
    "code": "+1",
    "iso": "VG",
    "flag": "//www.countryflags.io/VG/flat/24.png",
    "order": 999,
    "mask": "(284)000-0000"
  },
  {
    "name": "Virgin Islands, U.S.",
    "code": "+1",
    "iso": "VI",
    "flag": "//www.countryflags.io/VI/flat/24.png",
    "order": 999,
    "mask": "(340)000-0000"
  },
  {
    "name": "Wallis and Futuna",
    "code": "+681",
    "iso": "WF",
    "flag": "//www.countryflags.io/WF/flat/24.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "Yemen",
    "code": "+967",
    "iso": "YE",
    "flag": "//www.countryflags.io/YE/flat/24.png",
    "order": 999,
    "mask": [
      "0-000-000",
      "00-000-000",
      "000-000-000"
    ]
  },
  {
    "name": "Zambia",
    "code": "+260",
    "iso": "ZM",
    "flag": "//www.countryflags.io/ZM/flat/24.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Zimbabwe",
    "code": "+263",
    "iso": "ZW",
    "flag": "//www.countryflags.io/ZW/flat/24.png",
    "order": 999,
    "mask": "0-000000"
  }
];