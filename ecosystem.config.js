module.exports = {
  apps: [{
    name: 'test-app',
    script: './server.js',
    cwd: '/home/user/test-app',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/user/logs/test-app-err.log',
    out_file: '/home/user/logs/test-app-out.log',
    log_file: '/home/user/logs/test-app-combined.log',
    time: true,
    watch: false,
    autorestart: true
  }]
};
