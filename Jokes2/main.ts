app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
      }
    }
  }));
  

import './style.css'
import { render_jokes } from './view/render_jokes.ts'

render_jokes();