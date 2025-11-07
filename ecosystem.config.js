module.exports = {
  apps: [
    {
      name: 'robland',
      script: 'npm',
      args: 'start -- -p 9003 -H 0.0.0.0',
      cwd: '/home/yamz/sites/Robland',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 9003
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '500M'
    }
  ]
};
