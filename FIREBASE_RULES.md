# Firestore Rules untuk Website Elevaree

Website publik hanya perlu membaca konten program dan jadwal dari admin. Data lain seperti siswa, tutor, dan enrollment tetap hanya untuk admin yang sudah login.

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

