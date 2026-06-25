# Setup Supabase untuk Elevaree.Academy

Website dan halaman `kelola-konten.html` sudah dimigrasikan dari Firebase ke Supabase.

## 1. Buat project Supabase

Buka Supabase Dashboard, buat project baru, lalu ambil:

- Project URL
- anon public key

Masukkan ke file:

```js
// supabase-config.js
window.ELEVAREE_SUPABASE = {
  url: "https://PROJECT_ID.supabase.co",
  anonKey: "SUPABASE_ANON_KEY"
};
```

## 2. Jalankan schema SQL

Buka Supabase Dashboard > SQL Editor, lalu jalankan seluruh isi file:

```txt
SUPABASE_SETUP.sql
```

File SQL ini membuat:

- `site_content`
- `programs`
- `schedules`
- `app_settings`
- RLS public read untuk website
- RPC admin write dengan kode admin
- seed data awal Elevaree

## 3. Login admin konten

Buka:

```txt
https://elevaree-academy.vercel.app/kelola-konten.html
```

Kode admin default:

```txt
ELEVAREE2026
```

Kode ini tersimpan di table `app_settings` dengan key `admin_code`. Untuk menggantinya, update value di Supabase.

