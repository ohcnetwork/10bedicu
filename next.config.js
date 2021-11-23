module.exports = {
  async redirects() {
    return [
      {
        source: "/telangana",
        destination: "https://10bedicu.org/telangana",
        permanent: true,
      },
      {
        source: "/andhra_pradesh",
        destination: "https://10bedicu.org/andhra-pradesh",
        permanent: true,
      },
    ];
  },
};
