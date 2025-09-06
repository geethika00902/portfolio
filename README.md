# Personal Portfolio (HTML/CSS/JS)

This is a simple, responsive personal portfolio scaffold built with vanilla HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in your browser. For best results (and to avoid CORS issues when expanding), use a simple static server:

Windows PowerShell:

```powershell
cd C:\Users\avuth\Downloads\portfolio
python -m http.server 8080
```

Then open `http://localhost:8080`.

Alternatives:

- Node: `npx serve -l 8080` or `npx http-server -p 8080`

## Customize

- Replace "Your Name" in `index.html` header, hero, and footer.
- Update contact email (`you@example.com`).
- Edit the Projects section: titles, descriptions, and links.
- Replace the avatar with an image: drop a file into `assets/` and style `.avatar` accordingly.
- Adjust theme colors in `styles.css` under `:root`.

## Features

- Semantic sections: Home, About, Projects, Contact
- Responsive layout with CSS Grid/Flex
- Sticky, translucent header and mobile menu
- Smooth scrolling with header offset
- Email copy-to-clipboard action

## License

MIT


