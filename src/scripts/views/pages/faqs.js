const Faqs = {
  faqList: [
    {
      question: 'Bagaimana gejala penyakit padi?',
      answer: 'Gejala penyakit padi: daun kuning, bercak coklat, kerdil. ',
    },
    {
      question: 'Apakah ada forum diskusi untuk bertanya tentang pertanian?',
      answer: 'Saat ini belum tersedia',
    },
    {
      question: 'Apa jenis-jenis padi yang umum ditanam di Indonesia?',
      answer: 'Padi gogo, padi sawah, padi lahan kering, padi lebak, padi rawa.',
    },
    {
      question: 'Bagaimana cara mengatasi penyakit padi?',
      answer: 'Cara mengatasi: pemangkasan, penggunaan fungisida, varietas tahan.',
    },
    {
      question: 'Apa yang dimaksud dengan padi tipe basah dan padi tipe kering?',
      answer: 'Padi basah: direndam dalam air. Padi kering: dipanen saat butiran matang.',
    },
    {
      question: 'Apa yang dimaksud dengan sistem tanam padi "SRI"?',
      answer: 'Sistem Tanam Padi SRI: metode pengelolaan pertanian untuk meningkatkan produktivitas padi.',
    },
    {
      question: 'Apa perbedaan antara padi varietas unggul dan padi hibrida?',
      answer: 'Padi varietas unggul: hasil persilangan dari varietas terbaik, sedangkan padi hibrida: persilangan antara dua jenis tanaman padi yang berbeda.',
    },
    {
      question: 'Bagaimana cara merawat padi selama masa pertumbuhan?',
      answer: 'Cara merawat padi: pemupukan, irigasi, pengendalian gulma, dan perlindungan terhadap hama.',
    },
    {
      question: 'Bagaimana cara mengendalikan hama pada tanaman padi?',
      answer: 'Cara mengendalikan hama pada padi: pemakaian insektisida, penggunaan metode pengendalian hayati.',
    },
  ],

  async render() {
    let faqsHtml = '<h2>FAQs Page</h2>';
    faqsHtml += '<div class="faq-list">';

    this.faqList.forEach((faq) => {
      faqsHtml += `
        <div class="faq">
          <h4>${faq.question}</h4>
          <p>${faq.answer}</p>
        </div>
      `;
    });

    faqsHtml += '</div>';
    return faqsHtml;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Faqs;
