const Beranda = {
  async render() {
    return `
          <h2>Beranda Page</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
