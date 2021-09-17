export const PHONE_MASK = {
  mask: [/[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/],
  lead: false,
};

export const CARD_NUMBER_MASK = {
  mask: [
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
    ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
    ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
    ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
  ],
  lead: false,
};

export const TAXPAYER_ID_MASK = { mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/] };
export const OKED_MASK = { mask: [/\d/, /\d/, /\d/, /\d/, /\d/] };
export const MFO_MASK = { mask: [/\d/, /\d/, /\d/, /\d/, /\d/] };
export const PASSPORT_MASK = { mask: [/\w/, /\w/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] };

export const ACCOUNT_NUMBER_MASK = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
  ],
  guide: false,
};

export const ACCOUNT_NUMBER_MASK20 = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  guide: false,
};
