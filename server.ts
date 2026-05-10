import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    }
  });

  const PORT = 3000;

  // Socket.io logic
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('message', (data) => {
      // Broadcast to everyone including sender (for simplicity in this portfolio demo)
      // In a real support chat, you'd have a room for user <-> admin.
      // Since this is a portfolio, we'll simulate a 1-to-1 chat with a simple auto-reply
      // if it's the first message, or just broadcast it.
      io.emit('message', data);
      
      // Simulating "real-time" response from CK_webby for demo purposes
      if (data.sender === 'user') {
        setTimeout(() => {
          socket.emit('message', {
            id: Date.now().toString(),
            text: "Thanks for reaching out! I'm currently busy crafting masterpieces, but I'll get back to you as soon as possible. Feel free to leave your contact details!",
            sender: 'CK_webby',
            timestamp: new Date().toISOString()
          });
        }, 1500);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
