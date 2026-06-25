-- Elevaree.Academy Supabase schema
-- Jalankan seluruh isi file ini di Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.site_content (
  key text primary key,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.programs (
  id text primary key,
  name text not null,
  category text,
  price integer,
  duration text,
  capacity integer,
  status text not null default 'Active',
  description text,
  sort_order integer not null default 100,
  updated_at timestamptz not null default now()
);

create table if not exists public.schedules (
  id text primary key,
  program text not null,
  day text,
  time text,
  tutor text,
  room text,
  quota integer,
  capacity integer,
  status text not null default 'Open',
  note text,
  sort_order integer not null default 100,
  updated_at timestamptz not null default now()
);

create table if not exists public.app_settings (
  key text primary key,
  value text not null
);

insert into public.app_settings (key, value)
values ('admin_code', 'ELEVAREE2026')
on conflict (key) do nothing;

alter table public.site_content enable row level security;
alter table public.programs enable row level security;
alter table public.schedules enable row level security;
alter table public.app_settings enable row level security;

grant select on public.site_content to anon;
grant select on public.programs to anon;
grant select on public.schedules to anon;

drop policy if exists "public read site content" on public.site_content;
create policy "public read site content"
on public.site_content for select
using (true);

drop policy if exists "public read programs" on public.programs;
create policy "public read programs"
on public.programs for select
using (true);

drop policy if exists "public read schedules" on public.schedules;
create policy "public read schedules"
on public.schedules for select
using (true);

create or replace function public.is_admin_code(p_code text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.app_settings
    where key = 'admin_code'
      and value = coalesce(p_code, '')
  );
$$;

create or replace function public.admin_upsert_site_content(p_admin_code text, p_key text, p_content jsonb)
returns public.site_content
language plpgsql
security definer
set search_path = public
as $$
declare
  result public.site_content;
begin
  if not public.is_admin_code(p_admin_code) then
    raise exception 'Invalid admin code';
  end if;

  insert into public.site_content (key, content, updated_at)
  values (p_key, coalesce(p_content, '{}'::jsonb), now())
  on conflict (key) do update
    set content = excluded.content,
        updated_at = now()
  returning * into result;

  return result;
end;
$$;

create or replace function public.admin_upsert_program(p_admin_code text, p_program jsonb)
returns public.programs
language plpgsql
security definer
set search_path = public
as $$
declare
  result public.programs;
  v_id text := coalesce(p_program->>'id', '');
begin
  if not public.is_admin_code(p_admin_code) then
    raise exception 'Invalid admin code';
  end if;
  if v_id = '' then
    raise exception 'Program id is required';
  end if;

  insert into public.programs (id, name, category, price, duration, capacity, status, description, sort_order, updated_at)
  values (
    v_id,
    p_program->>'name',
    p_program->>'category',
    nullif(p_program->>'price', '')::integer,
    p_program->>'duration',
    nullif(p_program->>'capacity', '')::integer,
    coalesce(nullif(p_program->>'status', ''), 'Active'),
    p_program->>'description',
    coalesce(nullif(p_program->>'sort_order', '')::integer, 100),
    now()
  )
  on conflict (id) do update
    set name = excluded.name,
        category = excluded.category,
        price = excluded.price,
        duration = excluded.duration,
        capacity = excluded.capacity,
        status = excluded.status,
        description = excluded.description,
        sort_order = excluded.sort_order,
        updated_at = now()
  returning * into result;

  return result;
end;
$$;

create or replace function public.admin_delete_program(p_admin_code text, p_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_code(p_admin_code) then
    raise exception 'Invalid admin code';
  end if;
  delete from public.programs where id = p_id;
end;
$$;

create or replace function public.admin_upsert_schedule(p_admin_code text, p_schedule jsonb)
returns public.schedules
language plpgsql
security definer
set search_path = public
as $$
declare
  result public.schedules;
  v_id text := coalesce(p_schedule->>'id', '');
begin
  if not public.is_admin_code(p_admin_code) then
    raise exception 'Invalid admin code';
  end if;
  if v_id = '' then
    raise exception 'Schedule id is required';
  end if;

  insert into public.schedules (id, program, day, time, tutor, room, quota, capacity, status, note, sort_order, updated_at)
  values (
    v_id,
    p_schedule->>'program',
    p_schedule->>'day',
    p_schedule->>'time',
    p_schedule->>'tutor',
    p_schedule->>'room',
    nullif(p_schedule->>'quota', '')::integer,
    nullif(p_schedule->>'capacity', '')::integer,
    coalesce(nullif(p_schedule->>'status', ''), 'Open'),
    p_schedule->>'note',
    coalesce(nullif(p_schedule->>'sort_order', '')::integer, 100),
    now()
  )
  on conflict (id) do update
    set program = excluded.program,
        day = excluded.day,
        time = excluded.time,
        tutor = excluded.tutor,
        room = excluded.room,
        quota = excluded.quota,
        capacity = excluded.capacity,
        status = excluded.status,
        note = excluded.note,
        sort_order = excluded.sort_order,
        updated_at = now()
  returning * into result;

  return result;
end;
$$;

create or replace function public.admin_delete_schedule(p_admin_code text, p_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_code(p_admin_code) then
    raise exception 'Invalid admin code';
  end if;
  delete from public.schedules where id = p_id;
end;
$$;

grant execute on function public.is_admin_code(text) to anon;
grant execute on function public.admin_upsert_site_content(text, text, jsonb) to anon;
grant execute on function public.admin_upsert_program(text, jsonb) to anon;
grant execute on function public.admin_delete_program(text, text) to anon;
grant execute on function public.admin_upsert_schedule(text, jsonb) to anon;
grant execute on function public.admin_delete_schedule(text, text) to anon;

insert into public.site_content (key, content)
values (
  'home',
  '{
    "heroEyebrow": "English Course Premium",
    "heroTitle": "Speak Up,",
    "heroHighlight": "Shine Bright!",
    "heroSuffix": "Saatnya Anak Berani Berbahasa Inggris",
    "heroSub": "Kuasai Bahasa Inggris bersama tutor berpengalaman di Elevaree.Academy. Metode modern, suasana menyenangkan, hasil nyata."
  }'::jsonb
)
on conflict (key) do nothing;

insert into public.programs (id, name, category, price, duration, capacity, status, description, sort_order)
values
  ('english-for-kids', 'English for Kids', 'Kids', 150000, '10x pertemuan / 2 minggu', 10, 'Active', 'Program fun dan interaktif untuk membangun fondasi Bahasa Inggris anak melalui games, songs, dan storytelling.', 10),
  ('english-for-teens', 'English for Teens', 'Teens', 400000, '10x pertemuan / 2 minggu', 10, 'Active', 'Program remaja untuk meningkatkan speaking, grammar, dan kepercayaan diri untuk sekolah maupun pergaulan global.', 20),
  ('ielts-preparation', 'IELTS Preparation', 'Test Prep', 650000, '10x pertemuan / bulan', 10, 'Active', 'Program intensif untuk target studi, beasiswa, dan karier internasional dengan fokus pada 4 skill IELTS.', 30),
  ('toefl-preparation', 'TOEFL Preparation', 'Test Prep', 600000, '10x pertemuan / bulan', 10, 'Active', 'Kelas terstruktur untuk membantu peserta mempersiapkan TOEFL secara efektif, baik untuk kampus maupun kebutuhan profesional.', 40),
  ('english-pte', 'English PTE', 'Test Prep', 700000, '8x pertemuan / bulan', 10, 'Active', 'Program persiapan PTE melalui strategi, latihan intensif, dan simulasi terarah.', 50),
  ('english-privat', 'English Privat', 'Private', 900000, '8x pertemuan / bulan', 1, 'Active', 'Program eksklusif 1-on-1 dengan tutor untuk kebutuhan belajar yang lebih fokus, fleksibel, dan sesuai target personalmu.', 60)
on conflict (id) do nothing;

insert into public.schedules (id, program, day, time, tutor, room, quota, capacity, status, note, sort_order)
values
  ('kids-monday-1530', 'English for Kids', 'Monday', '15:30 - 16:30', 'Ms. Dinda', 'Zoom Class', 10, 10, 'Open', 'Kelas kids sore', 10),
  ('teens-wednesday-1830', 'English for Teens', 'Wednesday', '18:30 - 19:30', 'Mr. Budi', 'Zoom Class', 10, 10, 'Open', 'Kelas teens weekday', 20),
  ('ielts-saturday-0900', 'IELTS Preparation', 'Saturday', '09:00 - 10:00', 'Ms. Rina', 'Zoom Class', 10, 10, 'Open', 'Simulasi speaking', 30)
on conflict (id) do nothing;
