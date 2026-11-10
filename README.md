# Fudy frontend

React, TypeScript, and Vite customer app. The home page is responsive and
organized under `src/pages/customer/home/HomePage`; shared page components are
in its `components` directory, while home feed fixtures are in `src/mockdata`.

## Home feed API

The page calls `homeApi.getFeed()` through the shared Axios client. The
development client uses a local mock adapter backed by `src/mockdata/home.ts`
when `VITE_API_BASE_URL` is empty. The adapter implements these HTTP-style
routes:

- `GET /api/v1/home`
- `GET /api/v1/categories`
- `GET /api/v1/restaurants`
- `GET /api/v1/foods/popular`

To connect a backend, set `VITE_API_BASE_URL` in `.env.local` to its API root
(for example, `http://localhost:8000/api/v1`). This disables the mock adapter;
Axios then sends requests to the same endpoint paths on the configured server.
The backend should expose compatible response shapes from `src/types/home.ts`.

## Development

- `npm run dev` starts the Vite development server.
- `npm run build` type-checks and builds the app.
- `npm run lint` runs Oxlint.
