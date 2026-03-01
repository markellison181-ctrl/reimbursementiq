'use client';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Welcome aboard! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email"
        className="flex-1 px-4 py-3 rounded-lg bg-navy-light border border-teal/20 text-white placeholder-gray-light/50 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
      </button>
      {status !== 'idle' && status !== 'loading' && (
        <p className={`text-sm mt-2 sm:mt-0 sm:self-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
      )}
    </form>
  );
}
