# 📚 Book Management API
---

# 🚀 1. Deskripsi Project

Project ini merupakan implementasi **RESTful API sederhana** menggunakan **Node.js** dan **Express.js** dengan konsep CRUD (Create, Read, Update, Delete).

API yang dibuat adalah **Book Management API**, yang digunakan untuk mengelola data buku seperti:
- Menampilkan daftar buku
- Menambahkan buku baru
- Mengupdate data buku
- Menghapus buku

Data disimpan sementara dalam bentuk **in-memory (array)** sehingga cocok untuk pembelajaran konsep RESTful API.

Project ini juga telah terintegrasi dengan:
- 🐳 Docker (Containerization)
- 🌿 Git (Version Control dengan Feature Branch Workflow)
- ⚙️ GitHub Actions (CI/CD Automation)

---

# 📡 2. Dokumentasi API

## 📌 Base URL
http://localhost:3001

## 🔹 Endpoint List

### ✅ GET /books
Menampilkan semua data buku

**Request:**
GET http://localhost:3001/books

**Response:**
```json
{
    "status": "success",
    "message": "List of books retrieved successfully",
    "data": [
        {
            "id": 1,
            "title": "Atomic Habits",
            "author": "James Clear"
        }
    ]
}
```

---

### ✅ POST /books
Menambahkan buku baru

**Request:**
POST http://localhost:3001/books

**Body:**
```json
{
  "title": "Harry Potter",
  "author": "J.K. Rowling"
}
```

**Response:**
```json
{
    "status": "success",
    "message": "Book added successfully",
    "data": {
        "id": 2,
        "title": "Harry Potter",
        "author": "J.K. Rowling"
    }
}
```

---

### ✅ PUT /books/:id
Mengupdate data buku

**Request:**
PUT http://localhost:3001/books/2

**Body:**
```json
{
  "title": "Harry Potter Updated"
}
```

**Response:**
```json
{
    "status": "success",
    "message": "Book updated successfully",
    "data": {
        "id": 2,
        "title": "Harry Potter Updated",
        "author": "J.K. Rowling"
    }
}
```

---

### ✅ DELETE /books/:id
Menghapus buku

**Request:**
DELETE http://localhost:3001/books/2

**Response:**
```json
{
    "status": "success",
    "message": "Book deleted successfully"
}
```

---

### ❌ GET /books/:id (Error Case)

**Request:**
GET http://localhost:3001/books/999

**Response:**
```json
{
    "status": "error",
    "message": "Book not found"
}
```

---

# 🐳 3. Panduan Instalasi (Docker)

## Tools yang Dibutuhkan
- Node.js
- Docker Desktop
- Git

## Langkah Menjalankan Project

1. Clone repository:
```bash
git clone https://github.com/FadhilaLatsaTsabita/book-api-docker.git
```

2. Masuk ke folder project:
```bash
cd book-api-docker
```

3. Jalankan Docker:
```bash
docker-compose up --build
```

## Informasi Port

- **Host Port**: 3001  
- **Container Port**: 3001  

Akses API:
http://localhost:3001

---
# 🌿 4. Alur Kerja Git

## Branch yang Digunakan
- main → branch utama  
- develop → branch pengembangan  
- feature/book-api → implementasi fitur API  



## Workflow
1. Membuat branch feature dari develop  
2. Mengembangkan fitur di feature branch  
3. Merge ke develop  
4. Push ke repository  



## Conventional Commits

Contoh commit:
```bash
feat: implement CRUD Book API with Express
fix: remove node_modules from repository
feat: add CI/CD pipeline with GitHub Actions
fix: allow npm audit to pass in CI
```

---

# ⚙️ 5. Status Automasi (GitHub Actions)

## Fungsi
- **CI (Continuous Integration)** → install dependencies & testing  
- **CS (Security Scan)** → audit keamanan menggunakan npm audit  



## Workflow

Setiap terjadi:
- push
- pull request  

akan menjalankan:
1. Install dependencies (`npm install`)
2. Menjalankan test sederhana
3. Menjalankan security scan (`npm audit`)



## Badge Status

```md
![CI](https://github.com/FadhilaLatsaTsabita/book-api-docker/actions/workflows/ci.yml/badge.svg)
```
```md
(https://github.com/FadhilaLatsaTsabita/book-api-docker/actions/workflows/ci.yml) 
```

---

# Kesimpulan

Project ini berhasil mengimplementasikan:
- RESTful API dengan metode CRUD
- Format response JSON standar
- Containerization menggunakan Docker
- Git workflow dengan Feature Branch
- Automasi CI/CD menggunakan GitHub Actions
