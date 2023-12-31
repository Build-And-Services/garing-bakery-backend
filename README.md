# Backend Repository garing-bakery

## Hierarchy structure directory

```markdown
garing-bakery-backend/
├── app/
│ ├── controllers/
│ │ ├── index.js
│ │ ├── user-controller.js
│ │ ├── product-controller.js
│ │ └── ...
│ ├── middlewares/
│ │ ├── index.js
│ │ ├── auth.js
│ │ └── ...
│ ├── routes/
│ │ ├── index.js
│ │ ├── users.js
│ │ ├── products.js
│ │ └── ...
│ ├── services/
│ │ ├── index.js
│ │ ├── user-service.js
│ │ ├── product-service.js
│ │ └── ...
│ ├── utils/
│ │ ├── errors/
│ │ │ ├── index.js
│ │ │ ├── custom-error.js
│ │ │ ├── already-exist-error.js
│ │ │ └── ...
│ │ ├── responses/
│ │ │ ├── error-response.js
│ │ │ ├── success-response.js
│ │ │ └── ...
│ │ ├── async-wrapper/
│ │ │ └── index.js
│ │ └── ...
│ └── helpers/
│ ├── bcrypt-helper.js
│ ├── jwt-helper.js
│ └── ...
├── frameworks/
│ └── webserver/
│ ├── express.js
│ ├── server.js
│ └── ...
├── prisma/
│ └── schema.prisma
├── public/
│ └── product-images/
│ ├── [uuid]-image.jpg
│ └── ...
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── README.md
├── app.js
├── package.json
└── package-lock.json
```
