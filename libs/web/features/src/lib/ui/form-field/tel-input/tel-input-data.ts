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
    "flag": "/assets/flags/AF.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Aland Islands",
    "code": "+358",
    "iso": "AX",
    "flag": "/assets/flags/AX.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "Albania",
    "code": "+355",
    "iso": "AL",
    "flag": "/assets/flags/AL.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Algeria",
    "code": "+213",
    "iso": "DZ",
    "flag": "/assets/flags/DZ.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "American Samoa",
    "code": "+1",
    "iso": "AS",
    "flag": "/assets/flags/AS.png",
    "order": 999,
    "mask": "(684)000-0000"
  },
  {
    "name": "Andorra",
    "code": "+376",
    "iso": "AD",
    "flag": "/assets/flags/AD.png",
    "order": 999,
    "mask": "000-000"
  },
  {
    "name": "Angola",
    "code": "+244",
    "iso": "AO",
    "flag": "/assets/flags/AO.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Anguilla",
    "code": "+1",
    "iso": "AI",
    "flag": "/assets/flags/AI.png",
    "order": 999,
    "mask": "(224)000-0000"
  },
  {
    "name": "Antarctica",
    "code": "+672",
    "iso": "AQ",
    "flag": "/assets/flags/AQ.png",
    "order": 999,
    "mask": "100-000"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "+1",
    "iso": "AG",
    "flag": "/assets/flags/AG.png",
    "order": 999,
    "mask": "(268)000-0000"
  },
  {
    "name": "Argentina",
    "code": "+54",
    "iso": "AR",
    "flag": "/assets/flags/AR.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Armenia",
    "code": "+374",
    "iso": "AM",
    "flag": "/assets/flags/AM.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Aruba",
    "code": "+297",
    "iso": "AW",
    "flag": "/assets/flags/AW.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Ascension Island",
    "code": "+247",
    "iso": "AC",
    "flag": "/assets/flags/SH.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Australia",
    "code": "+61",
    "iso": "AU",
    "flag": "/assets/flags/AU.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Austria",
    "code": "+43",
    "iso": "AT",
    "flag": "/assets/flags/AT.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Azerbaijan",
    "code": "+994",
    "iso": "AZ",
    "flag": "/assets/flags/AZ.png",
    "order": 999,
    "mask": "00-000-00-00"
  },
  {
    "name": "Bahamas",
    "code": "+1",
    "iso": "BS",
    "flag": "/assets/flags/BS.png",
    "order": 999,
    "mask": "(242)000-0000"
  },
  {
    "name": "Bahrain",
    "code": "+973",
    "iso": "BH",
    "flag": "/assets/flags/BH.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Bangladesh",
    "code": "+880",
    "iso": "BD",
    "flag": "/assets/flags/BD.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Barbados",
    "code": "+1",
    "iso": "BB",
    "flag": "/assets/flags/BB.png",
    "order": 999,
    "mask": "(246)000-0000"
  },
  {
    "name": "Belarus",
    "code": "+375",
    "iso": "BY",
    "flag": "/assets/flags/BY.png",
    "order": 999,
    "mask": "(00)000-00-00"
  },
  {
    "name": "Belgium",
    "code": "+32",
    "iso": "BE",
    "flag": "/assets/flags/BE.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Belize",
    "code": "+501",
    "iso": "BZ",
    "flag": "/assets/flags/BZ.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Benin",
    "code": "+229",
    "iso": "BJ",
    "flag": "/assets/flags/BJ.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Bermuda",
    "code": "+1",
    "iso": "BM",
    "flag": "/assets/flags/BM.png",
    "order": 999,
    "mask": "(441)000-0000"
  },
  {
    "name": "Bhutan",
    "code": "+975",
    "iso": "BT",
    "flag": "/assets/flags/BT.png",
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
    "flag": "/assets/flags/BO.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "+387",
    "iso": "BA",
    "flag": "/assets/flags/BA.png",
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
    "flag": "/assets/flags/BW.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Brazil",
    "code": "+55",
    "iso": "BR",
    "flag": "/assets/flags/BR.png",
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
    "flag": "/assets/flags/IO.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Brunei Darussalam",
    "code": "+673",
    "iso": "BN",
    "flag": "/assets/flags/BN.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Bulgaria",
    "code": "+359",
    "iso": "BG",
    "flag": "/assets/flags/BG.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Burkina Faso",
    "code": "+226",
    "iso": "BF",
    "flag": "/assets/flags/BF.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Burundi",
    "code": "+257",
    "iso": "BI",
    "flag": "/assets/flags/BI.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Cambodia",
    "code": "+855",
    "iso": "KH",
    "flag": "/assets/flags/KH.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Cameroon",
    "code": "+237",
    "iso": "CM",
    "flag": "/assets/flags/CM.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Canada",
    "code": "+1",
    "iso": "CA",
    "flag": "/assets/flags/CA.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Cape Verde",
    "code": "+238",
    "iso": "CV",
    "flag": "/assets/flags/CV.png",
    "order": 999,
    "mask": "(000)00-00"
  },
  {
    "name": "Cayman Islands",
    "code": "+1",
    "iso": "KY",
    "flag": "/assets/flags/KY.png",
    "order": 999,
    "mask": "(345)000-0000"
  },
  {
    "name": "Central African Republic",
    "code": "+236",
    "iso": "CF",
    "flag": "/assets/flags/CF.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Chad",
    "code": "+235",
    "iso": "TD",
    "flag": "/assets/flags/TD.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Chile",
    "code": "+56",
    "iso": "CL",
    "flag": "/assets/flags/CL.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "China",
    "code": "+86",
    "iso": "CN",
    "flag": "/assets/flags/CN.png",
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
    "flag": "/assets/flags/CX.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "+61",
    "iso": "CC",
    "flag": "/assets/flags/CC.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Colombia",
    "code": "+57",
    "iso": "CO",
    "flag": "/assets/flags/CO.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Comoros",
    "code": "+269",
    "iso": "KM",
    "flag": "/assets/flags/KM.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Congo",
    "code": "+242",
    "iso": "CG",
    "flag": "/assets/flags/CG.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Cook Islands",
    "code": "+682",
    "iso": "CK",
    "flag": "/assets/flags/CK.png",
    "order": 999,
    "mask": "00-000"
  },
  {
    "name": "Costa Rica",
    "code": "+506",
    "iso": "CR",
    "flag": "/assets/flags/CR.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Croatia",
    "code": "+385",
    "iso": "HR",
    "flag": "/assets/flags/HR.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Cuba",
    "code": "+53",
    "iso": "CU",
    "flag": "/assets/flags/CU.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Cyprus",
    "code": "+357",
    "iso": "CY",
    "flag": "/assets/flags/CY.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Czech Republic",
    "code": "+420",
    "iso": "CZ",
    "flag": "/assets/flags/CZ.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "+243",
    "iso": "CD",
    "flag": "/assets/flags/CD.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Denmark",
    "code": "+45",
    "iso": "DK",
    "flag": "/assets/flags/DK.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Djibouti",
    "code": "+253",
    "iso": "DJ",
    "flag": "/assets/flags/DJ.png",
    "order": 999,
    "mask": "00-00-00-00"
  },
  {
    "name": "Dominica",
    "code": "+1",
    "iso": "DM",
    "flag": "/assets/flags/DM.png",
    "order": 999,
    "mask": "(767)000-0000"
  },
  {
    "name": "Dominican Republic",
    "code": "+1",
    "iso": "DO",
    "flag": "/assets/flags/DO.png",
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
    "flag": "/assets/flags/EC.png",
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
    "flag": "/assets/flags/EG.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "El Salvador",
    "code": "+503",
    "iso": "SV",
    "flag": "/assets/flags/SV.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Equatorial Guinea",
    "code": "+240",
    "iso": "GQ",
    "flag": "/assets/flags/GQ.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Eritrea",
    "code": "+291",
    "iso": "ER",
    "flag": "/assets/flags/ER.png",
    "order": 999,
    "mask": "0-000-000"
  },
  {
    "name": "Estonia",
    "code": "+372",
    "iso": "EE",
    "flag": "/assets/flags/EE.png",
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
    "flag": "/assets/flags/SZ.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Ethiopia",
    "code": "+251",
    "iso": "ET",
    "flag": "/assets/flags/ET.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "code": "+500",
    "iso": "FK",
    "flag": "/assets/flags/FK.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "Faroe Islands",
    "code": "+298",
    "iso": "FO",
    "flag": "/assets/flags/FO.png",
    "order": 999,
    "mask": "000-000"
  },
  {
    "name": "Fiji",
    "code": "+679",
    "iso": "FJ",
    "flag": "/assets/flags/FJ.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Finland",
    "code": "+358",
    "iso": "FI",
    "flag": "/assets/flags/FI.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "France",
    "code": "+33",
    "iso": "FR",
    "flag": "/assets/flags/FR.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "French Guiana",
    "code": "+594",
    "iso": "GF",
    "flag": "/assets/flags/GF.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "French Polynesia",
    "code": "+689",
    "iso": "PF",
    "flag": "/assets/flags/PF.png",
    "order": 999,
    "mask": "00-00-00"
  },
  {
    "name": "Gabon",
    "code": "+241",
    "iso": "GA",
    "flag": "/assets/flags/GA.png",
    "order": 999,
    "mask": "0-00-00-00"
  },
  {
    "name": "Gambia",
    "code": "+220",
    "iso": "GM",
    "flag": "/assets/flags/GM.png",
    "order": 999,
    "mask": "(000)00-00"
  },
  {
    "name": "Georgia",
    "code": "+995",
    "iso": "GE",
    "flag": "/assets/flags/GE.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Germany",
    "code": "+49",
    "iso": "DE",
    "flag": "/assets/flags/DE.png",
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
    "flag": "/assets/flags/GH.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Gibraltar",
    "code": "+350",
    "iso": "GI",
    "flag": "/assets/flags/GI.png",
    "order": 999,
    "mask": "000-00000"
  },
  {
    "name": "Greece",
    "code": "+30",
    "iso": "GR",
    "flag": "/assets/flags/GR.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Greenland",
    "code": "+299",
    "iso": "GL",
    "flag": "/assets/flags/GL.png",
    "order": 999,
    "mask": "00-00-00"
  },
  {
    "name": "Grenada",
    "code": "+1",
    "iso": "GD",
    "flag": "/assets/flags/GD.png",
    "order": 999,
    "mask": "(473)000-0000"
  },
  {
    "name": "Guadeloupe",
    "code": "+590",
    "iso": "GP",
    "flag": "/assets/flags/GP.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Guam",
    "code": "+1",
    "iso": "GU",
    "flag": "/assets/flags/GU.png",
    "order": 999,
    "mask": "(671)000-0000"
  },
  {
    "name": "Guatemala",
    "code": "+502",
    "iso": "GT",
    "flag": "/assets/flags/GT.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Guernsey",
    "code": "+44",
    "iso": "GG",
    "flag": "/assets/flags/GG.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Guinea",
    "code": "+224",
    "iso": "GN",
    "flag": "/assets/flags/GN.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Guinea-Bissau",
    "code": "+245",
    "iso": "GW",
    "flag": "/assets/flags/GW.png",
    "order": 999,
    "mask": "0-000000"
  },
  {
    "name": "Guyana",
    "code": "+592",
    "iso": "GY",
    "flag": "/assets/flags/GY.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Haiti",
    "code": "+509",
    "iso": "HT",
    "flag": "/assets/flags/HT.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Holy See (Vatican City State)",
    "code": "+39",
    "iso": "VA",
    "flag": "/assets/flags/VA.png",
    "order": 999,
    "mask": "06 69800000"
  },
  {
    "name": "Honduras",
    "code": "+504",
    "iso": "HN",
    "flag": "/assets/flags/HN.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Hong Kong",
    "code": "+852",
    "iso": "HK",
    "flag": "/assets/flags/HK.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Hungary",
    "code": "+36",
    "iso": "HU",
    "flag": "/assets/flags/HU.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Iceland",
    "code": "+354",
    "iso": "IS",
    "flag": "/assets/flags/IS.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "India",
    "code": "+91",
    "iso": "IN",
    "flag": "/assets/flags/IN.png",
    "order": 999,
    "mask": "(0000)000-000"
  },
  {
    "name": "Indonesia",
    "code": "+62",
    "iso": "ID",
    "flag": "/assets/flags/ID.png",
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
    "flag": "/assets/flags/IR.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Iraq",
    "code": "+924",
    "iso": "IQ",
    "flag": "/assets/flags/IQ.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Ireland",
    "code": "+353",
    "iso": "IE",
    "flag": "/assets/flags/IE.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Isle of Man",
    "code": "+44",
    "iso": "IM",
    "flag": "/assets/flags/IM.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Israel",
    "code": "+972",
    "iso": "IL",
    "flag": "/assets/flags/IL.png",
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
    "flag": "/assets/flags/IT.png",
    "order": 999,
    "mask": "(000)0000-000"
  },
  {
    "name": "Ivory Coast / Cote d'Ivoire",
    "code": "+225",
    "iso": "CI",
    "flag": "/assets/flags/CI.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Jamaica",
    "code": "+1",
    "iso": "JM",
    "flag": "/assets/flags/JM.png",
    "order": 999,
    "mask": "(876)000-0000"
  },
  {
    "name": "Japan",
    "code": "+81",
    "iso": "JP",
    "flag": "/assets/flags/JP.png",
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
    "flag": "/assets/flags/JE.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "Jordan",
    "code": "+962",
    "iso": "JO",
    "flag": "/assets/flags/JO.png",
    "order": 999,
    "mask": "0-0000-0000"
  },
  {
    "name": "Kazakhstan",
    "code": "+77",
    "iso": "KZ",
    "flag": "/assets/flags/KZ.png",
    "order": 999,
    "mask": [
      "(000)000-00-00",
    ]
  },
  {
    "name": "Kenya",
    "code": "+254",
    "iso": "KE",
    "flag": "/assets/flags/KE.png",
    "order": 999,
    "mask": "000-000000"
  },
  {
    "name": "Kiribati",
    "code": "+686",
    "iso": "KI",
    "flag": "/assets/flags/KI.png",
    "order": 999,
    "mask": "00-000"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "code": "+850",
    "iso": "KP",
    "flag": "/assets/flags/KP.png",
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
    "flag": "/assets/flags/KR.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Kosovo",
    "code": "+383",
    "iso": "XK",
    "flag": "/assets/flags/XK.png",
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
    "flag": "/assets/flags/KW.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Kyrgyzstan",
    "code": "+996",
    "iso": "KG",
    "flag": "/assets/flags/KG.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Laos",
    "code": "+856",
    "iso": "LA",
    "flag": "/assets/flags/LA.png",
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
    "flag": "/assets/flags/LV.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Lebanon",
    "code": "+961",
    "iso": "LB",
    "flag": "/assets/flags/LB.png",
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
    "flag": "/assets/flags/LS.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Liberia",
    "code": "+231",
    "iso": "LR",
    "flag": "/assets/flags/LR.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Libya",
    "code": "+218",
    "iso": "LY",
    "flag": "/assets/flags/LY.png",
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
    "flag": "/assets/flags/LI.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Lithuania",
    "code": "+370",
    "iso": "LT",
    "flag": "/assets/flags/LT.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Luxembourg",
    "code": "+352",
    "iso": "LU",
    "flag": "/assets/flags/LU.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Macau",
    "code": "+853",
    "iso": "MO",
    "flag": "/assets/flags/MO.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Madagascar",
    "code": "+261",
    "iso": "MG",
    "flag": "/assets/flags/MG.png",
    "order": 999,
    "mask": "00-00-00000"
  },
  {
    "name": "Malawi",
    "code": "+265",
    "iso": "MW",
    "flag": "/assets/flags/MW.png",
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
    "flag": "/assets/flags/MY.png",
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
    "flag": "/assets/flags/MV.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Mali",
    "code": "+223",
    "iso": "ML",
    "flag": "/assets/flags/ML.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Malta",
    "code": "+356",
    "iso": "MT",
    "flag": "/assets/flags/MT.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Marshall Islands",
    "code": "+692",
    "iso": "MH",
    "flag": "/assets/flags/MH.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Martinique",
    "code": "+596",
    "iso": "MQ",
    "flag": "/assets/flags/MQ.png",
    "order": 999,
    "mask": "(000)00-00-00"
  },
  {
    "name": "Mauritania",
    "code": "+222",
    "iso": "MR",
    "flag": "/assets/flags/MR.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Mauritius",
    "code": "+230",
    "iso": "MU",
    "flag": "/assets/flags/MU.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Mayotte",
    "code": "+262",
    "iso": "YT",
    "flag": "/assets/flags/YT.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "Mexico",
    "code": "+52",
    "iso": "MX",
    "flag": "/assets/flags/MX.png",
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
    "flag": "/assets/flags/FM.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Moldova",
    "code": "+373",
    "iso": "MD",
    "flag": "/assets/flags/MD.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Monaco",
    "code": "+377",
    "iso": "MC",
    "flag": "/assets/flags/MC.png",
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
    "flag": "/assets/flags/MN.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Montenegro",
    "code": "+382",
    "iso": "ME",
    "flag": "/assets/flags/ME.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Montserrat",
    "code": "+1",
    "iso": "MS",
    "flag": "/assets/flags/MS.png",
    "order": 999,
    "mask": "(624)000-0000"
  },
  {
    "name": "Morocco",
    "code": "+212",
    "iso": "MA",
    "flag": "/assets/flags/MA.png",
    "order": 999,
    "mask": "00-0000-000"
  },
  {
    "name": "Mozambique",
    "code": "+258",
    "iso": "MZ",
    "flag": "/assets/flags/MZ.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Myanmar",
    "code": "+95",
    "iso": "MM",
    "flag": "/assets/flags/MM.png",
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
    "flag": "/assets/flags/NA.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Nauru",
    "code": "+674",
    "iso": "NR",
    "flag": "/assets/flags/NR.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Nepal",
    "code": "+977",
    "iso": "NP",
    "flag": "/assets/flags/NP.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Netherlands",
    "code": "+31",
    "iso": "NL",
    "flag": "/assets/flags/NL.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Netherlands Antilles",
    "code": "+599",
    "iso": "AN",
    "flag": "/assets/flags/AN.png",
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
    "flag": "/assets/flags/NC.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "New Zealand",
    "code": "+24",
    "iso": "NZ",
    "flag": "/assets/flags/NZ.png",
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
    "flag": "/assets/flags/NI.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Niger",
    "code": "+227",
    "iso": "NE",
    "flag": "/assets/flags/NE.png",
    "order": 999,
    "mask": "00-00-0000"
  },
  {
    "name": "Nigeria",
    "code": "+234",
    "iso": "NG",
    "flag": "/assets/flags/NG.png",
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
    "flag": "/assets/flags/NU.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Norfolk Island",
    "code": "+672",
    "iso": "NF",
    "flag": "/assets/flags/NF.png",
    "order": 999,
    "mask": "300-000"
  },
  {
    "name": "North Macedonia",
    "code": "+389",
    "iso": "MK",
    "flag": "/assets/flags/MK.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "+1",
    "iso": "MP",
    "flag": "/assets/flags/MP.png",
    "order": 999,
    "mask": "(670)000-0000"
  },
  {
    "name": "Norway",
    "code": "+47",
    "iso": "NO",
    "flag": "/assets/flags/NO.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Oman",
    "code": "+968",
    "iso": "OM",
    "flag": "/assets/flags/OM.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Pakistan",
    "code": "+92",
    "iso": "PK",
    "flag": "/assets/flags/PK.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Palau",
    "code": "+680",
    "iso": "PW",
    "flag": "/assets/flags/PW.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Palestine",
    "code": "+970",
    "iso": "PS",
    "flag": "/assets/flags/PS.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Panama",
    "code": "+507",
    "iso": "PA",
    "flag": "/assets/flags/PA.png",
    "order": 999,
    "mask": "000-0000"
  },
  {
    "name": "Papua New Guinea",
    "code": "+675",
    "iso": "PG",
    "flag": "/assets/flags/PG.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Paraguay",
    "code": "+595",
    "iso": "PY",
    "flag": "/assets/flags/PY.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Peru",
    "code": "+51",
    "iso": "PE",
    "flag": "/assets/flags/PE.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Philippines",
    "code": "+63",
    "iso": "PH",
    "flag": "/assets/flags/PH.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Pitcairn",
    "code": "+870",
    "iso": "PN",
    "flag": "/assets/flags/PN.png",
    "order": 999,
    "mask": "000-000-000"
  },
  {
    "name": "Poland",
    "code": "+48",
    "iso": "PL",
    "flag": "/assets/flags/PL.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Portugal",
    "code": "+351",
    "iso": "PT",
    "flag": "/assets/flags/PT.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Puerto Rico",
    "code": "+1",
    "iso": "PR",
    "flag": "/assets/flags/PR.png",
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
    "flag": "/assets/flags/QA.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Reunion",
    "code": "+262",
    "iso": "RE",
    "flag": "/assets/flags/RE.png",
    "order": 999,
    "mask": "00000-0000"
  },
  {
    "name": "Romania",
    "code": "+40",
    "iso": "RO",
    "flag": "/assets/flags/RO.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Russia",
    "code": "+7",
    "iso": "RU",
    "flag": "/assets/flags/RU.png",
    "order": 999,
    "mask": "(000)000-00-00"
  },
  {
    "name": "Rwanda",
    "code": "+250",
    "iso": "RW",
    "flag": "/assets/flags/RW.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Saint Barthelemy",
    "code": "+590",
    "iso": "BL",
    "flag": "/assets/flags/BL.png",
    "order": 999,
    "mask": "000-00-00-00"
  },
  {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "code": "+290",
    "iso": "SH",
    "flag": "/assets/flags/SH.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "+1",
    "iso": "KN",
    "flag": "/assets/flags/KN.png",
    "order": 999,
    "mask": "(869)000-0000"
  },
  {
    "name": "Saint Lucia",
    "code": "+1",
    "iso": "LC",
    "flag": "/assets/flags/LC.png",
    "order": 999,
    "mask": "(758)000-0000"
  },
  {
    "name": "Saint Martin",
    "code": "+590",
    "iso": "MF",
    "flag": "/assets/flags/MF.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "+508",
    "iso": "PM",
    "flag": "/assets/flags/PM.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "+1",
    "iso": "VC",
    "flag": "/assets/flags/VC.png",
    "order": 999,
    "mask": "(784)000-0000"
  },
  {
    "name": "Samoa",
    "code": "+685",
    "iso": "WS",
    "flag": "/assets/flags/WS.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "San Marino",
    "code": "+378",
    "iso": "SM",
    "flag": "/assets/flags/SM.png",
    "order": 999,
    "mask": "0000-000000"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "+239",
    "iso": "ST",
    "flag": "/assets/flags/ST.png",
    "order": 999,
    "mask": "00-00000"
  },
  {
    "name": "Saudi Arabia",
    "code": "+966",
    "iso": "SA",
    "flag": "/assets/flags/SA.png",
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
    "flag": "/assets/flags/SN.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Serbia",
    "code": "+381",
    "iso": "RS",
    "flag": "/assets/flags/RS.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Seychelles",
    "code": "+248",
    "iso": "SC",
    "flag": "/assets/flags/SC.png",
    "order": 999,
    "mask": "0-000-000"
  },
  {
    "name": "Sierra Leone",
    "code": "+232",
    "iso": "SL",
    "flag": "/assets/flags/SL.png",
    "order": 999,
    "mask": "00-000000"
  },
  {
    "name": "Singapore",
    "code": "+65",
    "iso": "SG",
    "flag": "/assets/flags/SG.png",
    "order": 999,
    "mask": "0000-0000"
  },
  {
    "name": "Sint Maarten",
    "code": "+1",
    "iso": "SX",
    "flag": "/assets/flags/SX.png",
    "order": 999,
    "mask": "(721)000-0000"
  },
  {
    "name": "Slovakia",
    "code": "+421",
    "iso": "SK",
    "flag": "/assets/flags/SK.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Slovenia",
    "code": "+386",
    "iso": "SI",
    "flag": "/assets/flags/SI.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Solomon Islands",
    "code": "+677",
    "iso": "SB",
    "flag": "/assets/flags/SB.png",
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
    "flag": "/assets/flags/SO.png",
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
    "flag": "/assets/flags/ZA.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "+500",
    "iso": "GS",
    "flag": "/assets/flags/GS.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "South Sudan",
    "code": "+211",
    "iso": "SS",
    "flag": "/assets/flags/SS.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Spain",
    "code": "+34",
    "iso": "ES",
    "flag": "/assets/flags/ES.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Sri Lanka",
    "code": "+94",
    "iso": "LK",
    "flag": "/assets/flags/LK.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Sudan",
    "code": "+249",
    "iso": "SD",
    "flag": "/assets/flags/SD.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Suriname",
    "code": "+597",
    "iso": "SR",
    "flag": "/assets/flags/SR.png",
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
    "flag": "/assets/flags/SJ.png",
    "order": 999,
    "mask": "(000)00-000"
  },
  {
    "name": "Sweden",
    "code": "+46",
    "iso": "SE",
    "flag": "/assets/flags/SE.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Switzerland",
    "code": "+41",
    "iso": "CH",
    "flag": "/assets/flags/CH.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Syrian Arab Republic",
    "code": "+963",
    "iso": "SY",
    "flag": "/assets/flags/SY.png",
    "order": 999,
    "mask": "00-0000-000"
  },
  {
    "name": "Taiwan",
    "code": "+886",
    "iso": "TW",
    "flag": "/assets/flags/TW.png",
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
    "flag": "/assets/flags/TJ.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "code": "+255",
    "iso": "TZ",
    "flag": "/assets/flags/TZ.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Thailand",
    "code": "+66",
    "iso": "TH",
    "flag": "/assets/flags/TH.png",
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
    "flag": "/assets/flags/TL.png",
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
    "flag": "/assets/flags/TG.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Tokelau",
    "code": "+690",
    "iso": "TK",
    "flag": "/assets/flags/TK.png",
    "order": 999,
    "mask": "0000"
  },
  {
    "name": "Tonga",
    "code": "+676",
    "iso": "TO",
    "flag": "/assets/flags/TO.png",
    "order": 999,
    "mask": "00000"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "+1",
    "iso": "TT",
    "flag": "/assets/flags/TT.png",
    "order": 999,
    "mask": "(868)000-0000"
  },
  {
    "name": "Tunisia",
    "code": "+216",
    "iso": "TN",
    "flag": "/assets/flags/TN.png",
    "order": 999,
    "mask": "00-000-000"
  },
  {
    "name": "Turkey",
    "code": "+90",
    "iso": "TR",
    "flag": "/assets/flags/TR.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Turkmenistan",
    "code": "+993",
    "iso": "TM",
    "flag": "/assets/flags/TM.png",
    "order": 999,
    "mask": "0-000-0000"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "+1",
    "iso": "TC",
    "flag": "/assets/flags/TC.png",
    "order": 999,
    "mask": "(249)000-000"
  },
  {
    "name": "Tuvalu",
    "code": "+688",
    "iso": "TV",
    "flag": "/assets/flags/TV.png",
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
    "flag": "/assets/flags/UG.png",
    "order": 999,
    "mask": "(000)000-000"
  },
  {
    "name": "Ukraine",
    "code": "+380",
    "iso": "UA",
    "flag": "/assets/flags/UA.png",
    "order": 999,
    "mask": "(00)000-00-00"
  },
  {
    "name": "United Arab Emirates",
    "code": "+971",
    "iso": "AE",
    "flag": "/assets/flags/AE.png",
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
    "flag": "/assets/flags/GB.png",
    "order": 999,
    "mask": "00-0000-0000"
  },
  {
    "name": "United States",
    "code": "+1",
    "iso": "US",
    "flag": "/assets/flags/US.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Uruguay",
    "code": "+598",
    "iso": "UY",
    "flag": "/assets/flags/UY.png",
    "order": 999,
    "mask": "0-000-00-00"
  },
  {
    "name": "Uzbekistan",
    "code": "+998",
    "iso": "UZ",
    "flag": "/assets/flags/UZ.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Vanuatu",
    "code": "+678",
    "iso": "VU",
    "flag": "/assets/flags/VU.png",
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
    "flag": "/assets/flags/VE.png",
    "order": 999,
    "mask": "(000)000-0000"
  },
  {
    "name": "Vietnam",
    "code": "+84",
    "iso": "VN",
    "flag": "/assets/flags/VN.png",
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
    "flag": "/assets/flags/VG.png",
    "order": 999,
    "mask": "(284)000-0000"
  },
  {
    "name": "Virgin Islands, U.S.",
    "code": "+1",
    "iso": "VI",
    "flag": "/assets/flags/VI.png",
    "order": 999,
    "mask": "(340)000-0000"
  },
  {
    "name": "Wallis and Futuna",
    "code": "+681",
    "iso": "WF",
    "flag": "/assets/flags/WF.png",
    "order": 999,
    "mask": "00-0000"
  },
  {
    "name": "Yemen",
    "code": "+967",
    "iso": "YE",
    "flag": "/assets/flags/YE.png",
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
    "flag": "/assets/flags/ZM.png",
    "order": 999,
    "mask": "00-000-0000"
  },
  {
    "name": "Zimbabwe",
    "code": "+263",
    "iso": "ZW",
    "flag": "/assets/flags/ZW.png",
    "order": 999,
    "mask": "0-000000"
  }
];