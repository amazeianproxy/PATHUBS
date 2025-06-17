WARNING: REQUIRED TO MAKE A FILE CALLED ".env.local".

Paste below into ".env.local". This will connect you to the database.

```
NEXT_PUBLIC_SUPABASE_URL=https://vtabgthqbetvekhwfwpv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0YWJndGhxYmV0dmVraHdmd3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzE5NzUsImV4cCI6MjA2Mzg0Nzk3NX0.SxtH5d2p33tlxDrS-RVaj7LAVIeZtxfT3VYYP5yXqho
```

You may need to do "npm install" first before running for the first time, which will install node_modules.
```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
