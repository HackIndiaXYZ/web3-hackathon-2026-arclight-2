import { Toaster } from 'sonner';
import MailIQ from './MailIQ';

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', overflow: 'hidden', background: '#020817' }}>
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: '#0f172a',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#e2e8f0',
            borderRadius: '12px',
            fontSize: '13px',
          },
        }}
      />
      <MailIQ />
    </div>
  );
}
