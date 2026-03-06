# Configuration Guide - ConsultPro Site Vitrine

## 🚀 Démarrage Rapide

### 1. Démarrer un Serveur Local

#### Option A: Python 3 (Recommandé - Plus simple)
```bash
# Se placer dans le répertoire du projet
cd /path/to/cedric

# Démarrer le serveur
python3 -m http.server 8000

# Accéder au site
# Ouvrez http://localhost:8000 dans votre navigateur
```

#### Option B: Node.js (http-server)
```bash
npm install -g http-server
http-server
# Le site sera accessible à http://localhost:8080
```

#### Option C: PHP (Si disponible)
```bash
php -S localhost:8000
```

### 2. Naviguer sur le Site
- Accueil: `http://localhost:8000/`
- À Propos: `http://localhost:8000/about.html`
- Services: `http://localhost:8000/services.html`
- Portfolio: `http://localhost:8000/portfolio.html`
- Blog: `http://localhost:8000/blog.html`
- Contact: `http://localhost:8000/contact.html`

## 📝 Édition du Contenu

### Modifier le Nom de l'Entreprise
Cherchez et remplacez "ConsultPro" par votre nom:

Files à mettre à jour:
- `index.html`
- `about.html`
- `services.html`
- `portfolio.html`
- `blog.html`
- `contact.html`
- `assets/css/style.css`
- `.github/copilot-instructions.md`

### Mettre à Jour les Informations de Contact

**E-mail:**
Cherchez: `info@consultpro.com` → Remplacez par votre email

**Téléphone:**
Cherchez: `+33 1 23 45 67 89` → Remplacez par votre numéro

**Adresse:**
Cherchez: `123 Rue de l'Innovation, 75000 Paris` → Remplacez par votre adresse

### Modifier les Couleurs
Éditez [assets/css/style.css](assets/css/style.css) ligne 1-10:

```css
:root {
  --primary-color: #0066cc;      /* ← Changez cette couleur */
  --secondary-color: #00aa88;    /* ← Et celle-ci */
  --accent-color: #ff6b6b;       /* ← Et celle-ci */
  /* ... */
}
```

## 🖼️ Ajouter des Images

### Placement des Images
1. Créez un dossier `assets/images/`
2. Placez-y vos images (JPG, PNG, WebP)

### Exemple - Remplacer le Hero Background
Dans `index.html`, modifiez la section hero:

```html
<section class="hero" style="background-image: url('assets/images/hero.jpg'); background-size: cover;">
```

### Ajouter une Image d'Équipe
```html
<div style="background-image: url('assets/images/team-member.jpg'); background-size: cover; width: 100%; height: 300px; border-radius: 12px;"></div>
```

## 📧 Intégrer le Formulaire de Contact

### Option 1: Formspree (Gratuit et Facile) ⭐ Recommandé

1. Visitez https://formspree.io
2. Inscription gratuite
3. Créez un formulaire
4. Copiez votre code unique (ex: `https://formspree.io/f/YOUR_FORM_ID`)
5. Modifiez [contact.html](contact.html):

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Le reste du formulaire reste identique -->
</form>
```

Et supprimez le fichier `assets/js/script.js` du traitement du formulaire (ou gardez-le pour validation supplémentaire).

### Option 2: EmailJS (Depuis JavaScript)

```javascript
// Dans assets/js/script.js, remplacez le traitement du formulaire par:
emailjs.send('service_id', 'template_id', {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  subject: document.getElementById('subject').value,
  message: document.getElementById('message').value
}).then(
  response => alert('Message envoyé avec succès!'),
  error => alert('Erreur lors de l\'envoi: ' + error)
);
```

### Option 3: Backend Custom (Node.js / PHP)
Créez un fichier `send-email.php` ou `send-email.js` pour traiter les submissions.

## 🎨 Personnalisation Avancée

### Modifier la Police
Éditez [assets/css/style.css](assets/css/style.css):

```css
body {
  font-family: 'Votre Police', sans-serif;  /* ← Changez ici */
}
```

### Ajouter des Animations CSS
Exemple pour faire bouger un élément:

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.element {
  animation: slideIn 0.6s ease-out;
}
```

## 🔧 Optimisations Recommandées

### 1. Compresser les Images
Utilisez:
- TinyPNG (https://tinypng.com)
- ImageOptim (macOS)
- OptiPNG

### 2. Ajouter Google Analytics
Dans tous les fichiers HTML, avant `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. SEO - Ajouter Open Graph (Partage Social)
Dans le `<head>` de chaque page:

```html
<meta property="og:title" content="Titre de la Page">
<meta property="og:description" content="Description courte">
<meta property="og:image" content="assets/images/og-image.jpg">
<meta property="og:url" content="https://votresite.com/page.html">
```

## 🚀 Déploiement

### Option 1: Netlify (Gratuit)
1. Poussez votre code sur GitHub
2. Allez sur https://netlify.com
3. Connectez-vous avec GitHub
4. Sélectionnez votre repo
5. Déploiement automatique!

### Option 2: Vercel (Gratuit)
1. Installez Vercel: `npm i -g vercel`
2. Exécutez: `vercel`
3. Suivez les instructions

### Option 3: GitHub Pages (Gratuit)
1. Créez un repo `votreusernom.github.io`
2. Poussez le contenu
3. Accessible à `https://votreusernom.github.io`

### Option 4: Hébergement Classique (Apache/Nginx)
1. Via FTP/SFTP, uploadez tous les fichiers
2. Configurez le domaine
3. C'est tout!

## 🐛 Dépannage

### Le formulaire ne fonctionne pas
- Vérifiez la console JavaScript (F12 → Console)
- Assurez-vous que le service de formulaire est configuré

### Le site ne charge pas les styles
- Vérifiez que le chemin CSS est correct
- Rafraîchissez la page (Ctrl+F5 ou Cmd+Shift+R)
- Videz le cache du navigateur

### Menu mobile ne fonctionne pas
- Vérifiez que `assets/js/script.js` est chargé
- Ouvrez la console pour voir les erreurs

## 📞 Support

Pour des questions ou problèmes:
- Consultez le [README.md](README.md)
- Vérifiez la console JavaScript (F12)
- Testez dans un navigateur différent

---

**Bon développement! 🚀**
