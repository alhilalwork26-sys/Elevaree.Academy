# Firestore Rules untuk Website Elevaree

Website publik hanya perlu membaca konten program dan jadwal dari admin. Admin konten baru memakai Firebase Anonymous Auth di belakang layar, jadi admin cukup memasukkan kode admin di `kelola-konten.html` dan tidak perlu akun email Firebase.

Aktifkan dulu Firebase Console > Authentication > Sign-in method > Anonymous.

Gunakan rules ini di Firebase Console > Firestore Database > Rules:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /programs/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /schedules/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /siteContent/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /students/{document=**} {
      allow read, write: if request.auth != null;
    }

    match /tutors/{document=**} {
      allow read, write: if request.auth != null;
    }

    match /enrollments/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
