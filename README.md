# Werner Fink – realitní fotografie

Hotová šablona webu pro Vercel.

## Jak web nahrát na Vercel nejjednodušeji

1. Rozbal ZIP.
2. Nahraj složku na GitHub jako nový repozitář.
3. Jdi na https://vercel.com
4. Dej Add New Project.
5. Vyber svůj GitHub repozitář.
6. Klikni Deploy.

Hotovo. Vercel ti vytvoří odkaz na web.

## Co změnit před nahráním

V souboru `app/page.jsx` změň:

- `tvujemail@example.com` na svůj e-mail
- `+420 777 777 777` na svoje číslo
- odkazy na Instagram a Facebook
- texty, pokud chceš jiné

## Kam dát vlastní fotky

Fotky dávej do složky:

`public/portfolio/`

Pak v souboru `app/page.jsx` změň názvy u fotek, například:

`/portfolio/foto-1.svg`

na:

`/portfolio/moje-fotka-1.jpg`

Doporučení: fotky pojmenuj jednoduše bez háčků a čárek, třeba:

- byt-praha-1.jpg
- dum-exterier.jpg
- kuchyne-detail.jpg

## Spuštění u sebe v počítači

Pokud chceš web zkusit lokálně:

```bash
npm install
npm run dev
```

Pak otevři:

http://localhost:3000

## Formulář

Formulář je napojený přes FormSubmit. Aby chodil na tvůj e-mail, nahraď v `app/page.jsx`:

`https://formsubmit.co/tvujemail@example.com`

za svůj e-mail, například:

`https://formsubmit.co/werner@email.cz`

Při prvním odeslání bude možná potřeba potvrdit e-mail.
