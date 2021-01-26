interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'ViniciusMendite@viniciusmendite.onmicrosoft.com',
      name: 'Vinícius da Microsoft',
    },
  },
} as IMailConfig;
