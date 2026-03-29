@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  --color-brand-blue: #0B192C;
  --color-brand-blue-light: #1A365D;
  --color-brand-gold: #D4AF37;
  --color-brand-gold-light: #F4E3B2;
  --color-brand-white: #FFFFFF;
  --color-brand-gray: #F8F9FA;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-brand-white);
  color: var(--color-brand-blue);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
}
