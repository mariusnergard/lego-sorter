export default [
  {
    title: 'Chip type(s)',
    displayIf: false,
    elements: [
      {
        type: 'list',
        label: 'RFID Chip Technology',
        id: 'chipType',
        required: true,
        multiple: true,
        tag: true,
        values: [
          {
            value: 1,
            label: 'Mifare DESFire',
            disabledIf: [4],
          },
          {
            value: 2,
            label: 'Mifare Classic',
            disabledIf: [4],
          },
          {
            value: 3,
            label: 'EM',
            disabledIf: 4,
          },
          {
            value: 4,
            label: 'HID Prox',
            disabledIf: [1, 2, 3],
          },
        ],
      },
    ],
  },
  {
    title: 'Mifare DESFire Setup',
    displayIf: ['chipType', 1], // Mifare DESFire
    elements: [
      {
        type: 'bool',
        label: 'Read CSN',
        id: 'mfDfReadCSN',
      },
      {
        displayIf: ['mfDfReadCSN', true],
        type: 'list',
        label: 'CSN format',
        id: 'mfDfReadCSNFormat',
        required: true,
        multiple: true,
        values: [
          {
            value: 1,
            label: 'MSB Decimal 7 byte',
          },
          {
            value: 2,
            label: 'MSB Hexadecimal 7 byte',
          },
          {
            value: 3,
            label: 'LSB Decimal 7 byte',
          },
          {
            value: 4,
            label: 'LSB Hexadecimal 7 byte',
          },
          {
            value: 5,
            label: 'MSB Decimal 4 byte (truncated)',
          },
        ],
      },
      {
        displayIf: ['mfDfReadCSN', true],
        type: 'text',
        label: 'Prefix',
        id: 'mfDfCSNPrefix',
      },
      {
        displayIf: ['mfDfReadCSN', true],
        type: 'text',
        label: 'Suffix',
        id: 'mfDfCSNSuffix',
      },
      {
        type: 'bool',
        label: 'Read Application',
        id: 'mfDfReadAPP',
      },
      {
        displayIf: ['mfDfReadAPP', true],
        type: 'text',
        label: 'Application ID (AID)',
        id: 'mfDfReadAID',
        required: true,
      },
      {
        displayIf: ['mfDfReadAPP', true],
        type: 'text',
        label: 'File ID (HEX)',
        id: 'mfDfReadFile',
        required: true,
      },
      {
        displayIf: ['mfDfReadAPP', true],
        type: 'list',
        label: 'Output format',
        id: 'mfDfReadAppFormat',
        required: true,
        values: [
          {
            value: 1,
            label: 'Decimal',
          },
          {
            value: 2,
            label: 'Hexadecimal',
          },
        ],
      },
      {
        displayIf: ['mfDfReadAPP', true],
        type: 'text',
        label: 'Comments',
        id: 'mfDfReadComments',
      },
    ],
  },
  {
    title: 'Mifare Classic Setup',
    displayIf: ['chipType', 2], // Mifare Classic
    elements: [
      {
        type: 'bool',
        label: 'Read CSN',
        id: 'mfClReadCSN',
      },
      {
        displayIf: ['mfClReadCSN', true],
        type: 'list',
        label: 'CSN format',
        id: 'mfClReadCSNFormat',
        required: true,
        multiple: true,
        values: [
          {
            value: 1,
            label: 'MSB Decimal 4 byte',
          },
          {
            value: 2,
            label: 'MSB Hexadecimal 4 byte',
          },
          {
            value: 3,
            label: 'LSB Decimal 4 byte',
          },
          {
            value: 4,
            label: 'LSB Hexadecimal 4 byte',
          },
        ],
      },
      {
        displayIf: ['mfClReadCSN', true],
        type: 'text',
        label: 'Prefix',
        id: 'mfClCSNPrefix',
      },
      {
        displayIf: ['mfClReadCSN', true],
        type: 'text',
        label: 'Suffix',
        id: 'mfClCSNSuffix',
      },
      {
        type: 'bool',
        label: 'Read Sector',
        id: 'mfClReadSector',
      },
      {
        displayIf: ['mfClReadSector', true],
        type: 'text',
        label: 'Sector number',
        id: 'mfClSector',
        required: true,
      },
      {
        displayIf: ['mfClReadSector', true],
        type: 'list',
        label: 'Output format',
        id: 'mfClReadSectorFormat',
        required: true,
        values: [
          {
            value: 1,
            label: 'Decimal',
          },
          {
            value: 2,
            label: 'Hexadecimal',
          },
        ],
      },
      {
        displayIf: ['mfClReadSector', true],
        type: 'text',
        label: 'Comments',
        id: 'mfClReadComments',
      },
    ],
  },
  {
    title: 'EM Setup',
    displayIf: ['chipType', 3], // EM
    elements: [
      {
        type: 'list',
        label: 'CSN format',
        id: 'EMReadCSNFormat',
        required: true,
        multiple: true,
        values: [
          {
            value: 1,
            label: 'Solid',
          },
          {
            value: 2,
            label: 'Bewator 2010',
          },
          {
            value: 3,
            label: 'Bravida',
          },
          {
            value: 4,
            label: 'Senecta',
          },
          {
            value: 5,
            label: 'Aptus',
          },
          {
            value: 6,
            label: 'RCO',
          },
          {
            value: 7,
            label: 'Axema',
          },
          {
            value: 8,
            label: 'Bewator Entro',
          },
        ],
      },
      {
        type: 'text',
        label: 'Prefix',
        id: 'emCSNPrefix',
      },
      {
        type: 'text',
        label: 'Suffix',
        id: 'emCSNSuffix',
      },
    ],
  },
  {
    title: 'Configuration file',
    elements: [
      {
        type: 'text',
        label: 'UniMicro Part-number',
        id: 'UniPartNo',
        required: true,
      },
      {
        type: 'text',
        label: 'Configuration filename',
        id: 'ConfigFileName',
        required: true,
      },
    ],
  },
];
