# Deploying Frontend to Vercel

Your backend is already working at: **https://the-ai-engineer-challenge-kappa-seven.vercel.app/**

## Quick Solution: Deploy Frontend as Separate Project (Easiest)

This is the simplest way to get your UI running:

### Step 1: Create New Vercel Project for Frontend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **Project**
3. Import your GitHub repository (`The-AI-Engineer-Challenge`)
4. Configure the project:
   - **Project Name**: `the-ai-engineer-challenge-frontend` (or any name)
   - **Root Directory**: Click **Edit** and set to: `frontend`
   - **Framework Preset**: Next.js (should auto-detect)
   - **Build Command**: Leave default (auto-detected)
   - **Output Directory**: Leave default (`.next`)

### Step 2: Add Environment Variable (Optional)

If you want to explicitly set the API URL:
1. In project settings, go to **Environment Variables**
2. Add:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://the-ai-engineer-challenge-kappa-seven.vercel.app/api/chat`
   - **Environment**: All

*(Note: The frontend is already configured to use `/api/chat` relative URL, so this is optional)*

### Step 3: Deploy

Click **Deploy** and wait for it to complete.

### Step 4: Access Your App

Your UI will be available at: `https://your-frontend-project.vercel.app/`

---

## Alternative: Same Project (More Complex)

If you want everything in one project, you need to:

1. Keep current project for API only
2. Configure Vercel to handle both (requires custom build configuration)

**The separate project approach is recommended** as it's simpler and cleaner.

---

## How It Works

- **Frontend URL**: Your new frontend deployment URL
- **Backend URL**: `https://the-ai-engineer-challenge-kappa-seven.vercel.app/api/chat`
- The frontend automatically uses the correct API URL:
  - In production: Uses relative `/api/chat` (same domain) or your backend URL
  - In development: Uses `http://localhost:8000/api/chat`

---

## Testing

After deployment:
1. Visit your frontend URL
2. Try sending a message
3. It should connect to your backend and return AI responses

If you encounter issues:
- Check that `OPENAI_API_KEY` is set in your backend project's environment variables
- Check browser console for any errors
- Verify the API endpoint is accessible

