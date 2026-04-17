Place your HTTPS certificate and private key here before starting the container.

Expected filenames:
- `server.crt`
- `server.key`

Example self-signed certificate command:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout docker/certs/server.key \
  -out docker/certs/server.crt \
  -subj "/CN=localhost"
```
