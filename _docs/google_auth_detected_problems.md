---
title: Detected Google Auth Bugs
---

## Detected Google Auth Bugs
Time spent identifying and fixing: `30 minutes`
### When the JavaScript Frontend redirect URL is different from the one used in the backend.
ON THE FRONTEND
```
const redirectUri = 'http://teemboom.com/auth/google_login';           
```
The backend must have the same redirect url. A switch such as `https://teemboom.com/auth/google_login` is not permissible.
