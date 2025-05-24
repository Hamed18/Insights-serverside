# Insights-serverside

**Insights-serverside** is a backend project written in TypeScript. This repository provides server-side APIs and logic for the Insights platform, enabling powerful backend features, resource management, and operator functionality.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Operator Management](#operator-management)

---

## Overview

This repository contains the server-side implementation of the Insights platform, delivering RESTful APIs and backend logic to support client applications. It is built entirely in TypeScript and designed for scalability and maintainability.

---

## Features

- RESTful API endpoints for managing operators and other resources
- TypeScript-based codebase for type safety and maintainability
- Integration-ready for various client-side applications
- Easily extensible backend architecture

---

## API Documentation

Comprehensive API documentation is available and generated using [Redoc](https://github.com/Redocly/redoc). You can browse the live API docs here:

👉 [Insights-serverside API Docs](http://103.148.212.44/backend/redoc#tag/operator/operation/create_operator_api_operator_post)

### Example: Create Operator

#### Endpoint

```
POST /api/operator
```

#### Description

Creates a new operator in the system.

#### Request Body

```json
{
  "name": "string",
  "email": "string",
  "role": "string"
}
```

#### Response

- **201 Created**: Operator successfully created.
- **400 Bad Request**: Validation error.

_For detailed request/response schema, authentication, and more endpoints, visit the [API documentation](http://103.148.212.44/backend/redoc#tag/operator/operation/create_operator_api_operator_post)._

---

## Operator Management

The backend supports operator management, allowing administrators to create, update, and manage operators via the provided API endpoints.

- **Create Operator**: See [API Docs - Create Operator](http://103.148.212.44/backend/redoc#tag/operator/operation/create_operator_api_operator_post)
