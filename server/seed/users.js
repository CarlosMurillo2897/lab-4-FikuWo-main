const users = [
    {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin@admin.com',
        nickname: 'Admin123',
        emailVerified: true,
        disabled: false,
        isAdmin: true
      },
      {
        name: 'client',
        email: 'client@client.com',
        password: 'client@client.com',
        nickname: 'Client123',
        emailVerified: false,
        disabled: false,
        isAdmin: false
      },
      {
        name: 'disabled',
        email: 'disabled@disabled.com',
        password: 'disabled@disabled.com',
        nickname: 'Disabled123',
        emailVerified: false,
        disabled: true,
        isAdmin: false
      },
];

export default users;