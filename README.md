# Mock Authentication Backend Angular 9

An Angular HttpInterceptor that will simulate basic unencrypted authentication (email and password).

### Setup
#### Directory
 clone the files into an Angular app, perferably into a 'services' directory
 
    app
    ├── ...
    ├── scr
    │   ├── app
    │   │   ├── ...
    │   │   ├── services
    │   │   │    ├── authControll.ts
    │   │   │    ├── db.json
    │   │   │    └── mock-backend.service.ts
    │   │   └── ...
    │   └── ...
    └── ...
#### tsconfig configuration
file db.json mocks an authentication database, included are the default credentials

```json
  [
    {
      "email": "me@example.com",
      "password": "password"
    }
  ]
```
To be able to import json data into authController.ts, configure 'tsconfig.ts' include "resolveJsonModule" and "esModuleInterop"

```javascipt
/*
tsconfig.json 

  "compilerOptions": {
    ...
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ...
  }
*/
```

#### app.module.ts

configure 'app.module.ts' to include mockBackend class as a provider

```typescript
  providers: [
  ...
    { provide: HTTP_INTERCEPTORS, useClass: mockBackend, multi: true },
  ...
  ],
```

### Endpoints
> POST /api/authenticate
```typescript
body: { email: string, password: string }
```

### Response
#### Authenticated email and password
```typescript
{ status: 200 }
```
#### Found email, wrong password
```typescript
{ status: 401 }
```
#### Email not found
```typescript
{ status: 404 }
```






