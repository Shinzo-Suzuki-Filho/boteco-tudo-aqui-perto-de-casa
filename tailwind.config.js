// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "boteco-dark": "#1E1E1E", // Base de fundo principal (Quase preto)
        "boteco-accent-primary": "#FAD32E", // Amarelo Dourado/Mostarda (CTAs e Destaques)
        "boteco-primary": "#2AA89D", // Azul Coral/Teal Escuro (Fundo História)
        "boteco-danger": "#922C2C", // Vermelho/Bordo Vintage (Badges)
        "boteco-light": "#F8F8F8", // Texto em fundos escuros
      },
      fontFamily: {
        // Usar fontes web seguras que simulem o estilo bold/vintage
        sans: ["Arial Black", "Arial Bold", "Arial"],
        display: ["Arial Black", "Arial Bold", "Arial"],
      },
      backgroundImage: {
        // Padrão de Azulejo Português (Data URL simplificado para injeção)
        // Este é um Data URL placeholder/exemplo para demonstrar a técnica [2]
        "tile-pattern":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23FAD32E' /%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%231E1E1E' stroke-width='10' /%3E%3Cpath d='M50 10 L90 50 L50 90 L10 50 Z' fill='none' stroke='%231E1E1E' stroke-width='5' /%3E%3C/svg%3E\")",
        // Padrão de Grade de Mapa-Múndi para a seção Fale Conosco (Imagem 7)
        "map-grid":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect x='0' y='0' width='60' height='60' fill='none' stroke='%23FAD32E' stroke-width='0.5' stroke-opacity='0.1' /%3E%3Cline x1='0' y1='30' x2='60' y2='30' stroke='%23FAD32E' stroke-width='0.5' stroke-opacity='0.1' /%3E%3Cline x1='30' y1='0' x2='30' y2='60' stroke='%23FAD32E' stroke-width='0.5' stroke-opacity='0.1' /%3E%3C/svg%3E\")",
        // Wood texture pattern for hero section
        "wood-texture": "url('img/wood-texture.jpg')",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 2s infinite",
        "bounce-in": "bounceIn 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      boxShadow: {
        "glow-yellow": "0 0 20px rgba(250, 211, 46, 0.5)",
        "glow-teal": "0 0 20px rgba(42, 168, 157, 0.5)",
      },
    },
  },
  plugins: [],
};
