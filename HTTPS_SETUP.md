# HTTPS and Port Configuration Guide

## ✅ Completed Setup

### 1. SSL Certificates Created
- Self-signed certificates generated in `certs/` directory
- Valid for 365 days
- Location: 
  - Certificate: `certs/cert.pem`
  - Private Key: `certs/key.pem`

### 2. Vite Config Updated
- HTTPS enabled in [vite.config.ts](vite.config.ts)
- Server will now run on `https://` instead of `http://`

### 3. Firewall Ports Opened (UFW Rules Added)
- Port 5173 (Vite default)
- Port 4000 (custom port)
- Port 443 (HTTPS standard)

**Note**: UFW is currently inactive on your system. If you need firewall protection, enable it with:
```bash
sudo ufw enable
```

## 🚀 How to Use

### Start Your Dev Server
```bash
pnpm dev
# or
npm run dev
```

Your application will now be accessible at:
- **HTTPS**: `https://72.60.102.199:5173`
- **HTTP**: Port 80 would need nginx/caddy as reverse proxy

### Browser Security Warning
Since this is a self-signed certificate, browsers will show a security warning. To proceed:
1. Click "Advanced"
2. Click "Proceed to site" or "Accept the risk"

This is normal for development certificates.

## 🔒 Production HTTPS (Let's Encrypt)

For production, use Let's Encrypt for a trusted certificate:

### Option 1: Direct with Certbot
```bash
# Install certbot
sudo apt update
sudo apt install certbot

# Get certificate (requires domain name)
sudo certbot certonly --standalone -d yourdomain.com

# Certificates will be in: /etc/letsencrypt/live/yourdomain.com/
```

Then update [vite.config.ts](vite.config.ts):
```typescript
https: {
  key: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/fullchain.pem'),
},
```

### Option 2: Using Nginx as Reverse Proxy (Recommended)
```bash
# Install nginx
sudo apt install nginx certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com

# Configure nginx to proxy to your Vite app
sudo nano /etc/nginx/sites-available/pandeyedutrust
```

Sample Nginx config:
```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/pandeyedutrust /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🔓 Additional Ports

To open more ports:
```bash
# UFW (Ubuntu/Debian)
sudo ufw allow PORT_NUMBER/tcp

# Check status
sudo ufw status

# Enable UFW if needed
sudo ufw enable
```

## 🌐 Cloud Provider Firewalls

If you're on a cloud provider (AWS, GCP, Azure, DigitalOcean, etc.), you also need to:

### AWS (EC2 Security Groups)
- Go to EC2 → Security Groups
- Edit inbound rules
- Add ports: 5173, 4000, 443

### DigitalOcean (Firewalls)
- Networking → Firewalls
- Add inbound rules for ports

### Google Cloud (Firewall Rules)
```bash
gcloud compute firewall-rules create allow-vite \
  --allow tcp:5173,tcp:4000,tcp:443 \
  --source-ranges 0.0.0.0/0
```

### Azure (Network Security Groups)
- Go to Network Security Groups
- Add inbound security rules

## 🔍 Troubleshooting

### Check if port is listening:
```bash
sudo netstat -tlnp | grep -E ':(5173|4000|443)'
```

### Test HTTPS locally:
```bash
curl -k https://localhost:5173
```

### Check firewall status:
```bash
sudo ufw status verbose
sudo iptables -L -n
```

### Restart Vite server after config changes:
Press `Ctrl+C` in the terminal running Vite, then restart with `pnpm dev`
