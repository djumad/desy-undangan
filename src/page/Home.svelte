<script>
  import { onMount } from 'svelte';
  import foto from "../assets/foto.jpg";
  let nama = "Raymond Setiabudhy";
  let acara = "Wisuda Politeknik Negeri Ambon";
  let tanggal = "28 Desember 2024";
  let waktu = "15:00 WIT";
  let lokasi = "BTN Waitatiri Blok J3 NO 9";
  let penyelenggara = "Politeknik Negeri Ambon";
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center p-6">
  <div
    class="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-6"
    data-aos="fade-up">
    
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-extrabold text-indigo-600">🎓 Undangan Wisuda 🎓</h1>
      <p class="text-xl text-gray-700">{penyelenggara}</p>
    </div>

    <!-- Konten Utama -->
    <div class="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0">
      <!-- Gambar -->
      <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8" data-aos="fade-left">
        <img
          src={foto}
          alt="Foto Wisuda"
          class="w-64 h-80 rounded-lg shadow-md object-cover border-4 border-indigo-500"
        />
      </div>

      <!-- Data Wisuda -->
      <div class="flex-grow text-center md:text-left space-y-4" data-aos="fade-right">
        <p class="text-3xl font-bold text-gray-800">Dengan hormat 😊,</p>
        <p class="text-base text-gray-600">
          Kami mengundang Bapak/Ibu/Sdra/sdri untuk menghadiri Syukuran wisuda Desy Gracya Gultom yang dilaksanakan :
        </p>
        <div class="rounded-lg bg-gray-200 shadow-md p-6 space-y-4">
          <div>
            <p class="text-sm text-gray-500">Tempat Kediaman:</p>
            <p class="text-lg font-semibold text-gray-800">{nama}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Tanggal:</p>
            <p class="text-lg font-semibold text-gray-800">{tanggal}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Waktu:</p>
            <p class="text-lg font-semibold text-gray-800">{waktu}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Tempat:</p>
            <p class="text-lg font-semibold text-gray-800">{lokasi}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider mt-8" data-aos="fade-up">Lokasi Acara</div>

    <!-- Peta Google Maps -->
    <div class="w-full h-96" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.54987808926893!2d128.27738860091785!3d-3.612832889667739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6cedb2bf5f3f2b%3A0x3e82961c9b2a530d!2sHOREB%20PULSA!5e1!3m2!1sid!2sid!4v1735269941051!5m2!1sid!2sid"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full rounded-lg shadow-md"
      ></iframe>
    </div>
  </div>
</div>
