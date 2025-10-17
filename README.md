## Run 

```
# Запускаем приложение
pm2 start ecosystem.config.js
```

```
# Добавляем в автозагрузку
pm2 save
pm2 startup
```

```
# Проверяем статус
pm2 status
```

## Testing 

```
# Проверяем локально
curl http://localhost:3000
```

```
curl http://localhost:3000/ping

{
  "status": "pong",
  "timestamp": "2025-10-17T11:55:17.315Z",
  "server": "Test App"
}
```

```
curl http://localhost:3000/time

{
  "server_time": "2025-10-17T11:56:09.685Z",
  "timestamp": 1760702169685,
  "timezone": "UTC"
}
```

```
curl http://localhost:3000/info

{
  "node_version": "v20.9.0",
  "platform": "darwin",
  "memory": {
    "rss": 38969344,
    "heapTotal": 9322496,
    "heapUsed": 7865808,
    "external": 2221252,
    "arrayBuffers": 16747
  },
  "uptime": 100.300814663,
  "server": "Test PM2 App"
}
```


## Nginx

```
sudo nano /etc/nginx/sites-available/test-app
```

```
# Активируем конфиг
sudo ln -s /etc/nginx/sites-available/test-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```


## Open port 
```
sudo ufw allow 80
sudo ufw allow 3000
```

## Testings 

```
# Замените YOUR_SERVER_IP на IP вашего сервера
curl http://YOUR_SERVER_IP/
curl http://YOUR_SERVER_IP/ping
curl http://YOUR_SERVER_IP/time
curl http://YOUR_SERVER_IP/info
```


