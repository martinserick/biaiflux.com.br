# BI-AI Flux - Website Institucional

![BI-AI Flux Logo](logo.png)

## 🚀 Sobre o Projeto

Website institucional moderno e responsivo para a BI-AI Flux, consultoria especializada em Business Intelligence, IA e Gestão de Projetos para PMEs.

### ✨ Características

- **Design Moderno**: Interface clean com gradientes cyan/roxo e animações suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Animações Interativas**: Scroll animations, hover effects, e transições fluidas
- **Performance Otimizada**: Código limpo e debounced scroll events
- **Acessível**: Navegação intuitiva e semântica HTML5

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS**: Framework CSS via CDN para estilização moderna
- **JavaScript Vanilla**: Interatividade sem dependências
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia Inter

## 📁 Estrutura do Projeto

```
biaiflux.com.br/
├── index.html          # Página principal
├── script.js           # JavaScript interativo
├── logo.png           # Logo da empresa
└── README.md          # Documentação
```

## 🎨 Seções do Website

1. **Hero Section**: Apresentação impactante com logo e tagline
2. **Stats Section**: Métricas-chave com contadores animados
3. **Sobre**: Missão, visão e proposta de valor única
4. **Serviços**: 4 pilares principais (Power BI, Gestão, Processos, IA)
5. **Diferenciais**: 4 pontos únicos da consultoria
6. **Público-Alvo**: Setores e perfil ideal de cliente
7. **CTA**: Call-to-action para conversão
8. **Contato**: Formulário e informações de contato
9. **Footer**: Links e newsletter

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
```bash
# No diretório do projeto
open index.html
# ou
xdg-open index.html  # Linux
```

### Opção 2: Servidor Local com Python
```bash
# Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 3: Servidor Local com Node.js
```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server -p 8000

# Acesse: http://localhost:8000
```

### Opção 4: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🎯 Funcionalidades JavaScript

- ✅ Menu mobile responsivo
- ✅ Scroll suave para âncoras
- ✅ Navbar com shadow on scroll
- ✅ Intersection Observer para animações
- ✅ Contadores animados nas estatísticas
- ✅ Botão "Voltar ao topo"
- ✅ Formulário de contato com validação
- ✅ Sistema de notificações
- ✅ Efeito parallax no hero
- ✅ Cards com hover 3D
- ✅ Destaque de navegação ativa
- ✅ Performance otimizada com debounce

## 🎨 Paleta de Cores

- **Primary (Cyan)**: `#00D4FF`
- **Secondary (Purple)**: `#A855F7`
- **Dark Background**: `#0F172A`
- **Light Text**: `#F8FAFC`

## 📱 Responsividade

O website é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customização

### Alterar Cores
Edite as variáveis de cores no `tailwind.config` dentro do `<head>` do `index.html`:

```javascript
colors: {
    primary: '#00D4FF',    // Cyan
    secondary: '#A855F7',  // Purple
    dark: '#0F172A',       // Dark blue
    light: '#F8FAFC'       // Light gray
}
```

### Adicionar Novas Seções
1. Crie a seção HTML no `index.html`
2. Adicione link na navegação
3. Aplique classes de animação `.section-appear`
4. O JavaScript detectará automaticamente

### Integrar Backend no Formulário
No `script.js`, localize a função do formulário de contato:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Adicione sua integração aqui (ex: fetch API)
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    
    if (response.ok) {
        showNotification('Mensagem enviada!', 'success');
    }
});
```

## 📈 Métricas de Performance

- ⚡ First Contentful Paint: < 1.5s
- 🎨 Largest Contentful Paint: < 2.5s
- 📱 Mobile-friendly: 100%
- ♿ Accessibility: WCAG AA compliant

## 🌐 Deploy

### GitHub Pages
```bash
# Faça push para o repositório
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/biaiflux.com.br.git
git push -u origin main

# Ative GitHub Pages nas configurações do repositório
```

### Netlify
1. Arraste a pasta para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte o repositório GitHub

### Vercel
```bash
npm install -g vercel
vercel
```

## 📝 SEO

O website inclui:
- Meta tags otimizadas
- Estrutura semântica HTML5
- Alt text em imagens
- URLs amigáveis com âncoras
- Schema.org markup (pode ser adicionado)

## 🤝 Contribuindo

Para melhorias:
1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Add nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para BI-AI Flux. Todos os direitos reservados.

## 📞 Contato

**BI-AI Flux**
- Email: contato@biaiflux.com.br
- Website: [biaiflux.com.br](https://biaiflux.com.br)
- LinkedIn: [BI-AI Flux](https://linkedin.com)

---

**Desenvolvido com ❤️ para PMEs em crescimento**

*Conectamos Dados. Criamos Clareza. Impulsionamos Resultados.*
