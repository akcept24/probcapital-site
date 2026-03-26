# Залить сайт в репозиторий GitHub

Репозиторий: **git@github.com:akcept24/probcapital-site.git**

## Вариант 1: эта папка — отдельный репозиторий (рекомендуется)

Если `probcapital-site` лежит **вне** другого git-проекта (или вы скопировали папку на рабочий стол):

```bash
cd probcapital-site
git init
git branch -M main
git remote add origin git@github.com:akcept24/probcapital-site.git
git add .
git commit -m "Initial commit: ProbCapital marketing site"
git push -u origin main
```

Если на GitHub уже есть README и первый коммит:

```bash
git pull origin main --rebase --allow-unrelated-histories
# при конфликтах разрешите вручную, затем:
git push -u origin main
```

## Вариант 2: папка внутри монорепо `propcapital-dashboard`

Скопируйте только содержимое `probcapital-site` во временную директорию и инициализируйте там git (так не будет вложенного `.git`):

```bash
cp -R probcapital-site /tmp/probcapital-site-publish
cd /tmp/probcapital-site-publish
rm -rf .git 2>/dev/null; git init
git branch -M main
git remote add origin git@github.com:akcept24/probcapital-site.git
git add .
git commit -m "Initial commit: ProbCapital marketing site"
git push -u origin main
```

## Переменные на Vercel

В настройках проекта добавьте:

- `VITE_APP_URL` = `https://app.probcapital.com` (или URL превью дашборда)

См. `.env.example`.
