# Vercel Deployment Guide

## Fixing the Serverless Function Error

The error you're seeing is because the `OPENAI_API_KEY` environment variable is not set in Vercel. Here's how to fix it:

## Step 1: Set Environment Variable in Vercel

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project (`The-AI-Engineer-Challenge`)
3. Click on **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-`)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

## Step 2: Redeploy

After setting the environment variable, you need to redeploy:

1. Go to the **Deployments** tab
2. Find the latest deployment
3. Click the **"..."** menu → **Redeploy**

OR trigger a new deployment by pushing a commit to your repository.

## Important Notes

- The code has been updated to handle missing API keys gracefully (no longer crashes on import)
- The OpenAI client is now initialized lazily (only when needed)
- Added a `/api/health` endpoint to check if the API key is configured

## Additional Configuration

The `vercel.json` is already configured to route all requests to the FastAPI backend at `/api/index.py`.

## Verifying the Fix

After redeploying, you can check:

1. Visit: `https://your-project.vercel.app/` - Should return `{"status": "ok"}`
2. Visit: `https://your-project.vercel.app/api/health` - Should show `{"status": "ok", "openai_configured": true}`

If `openai_configured` is `false`, the environment variable wasn't set correctly.

## Model Update

The code now uses `gpt-4o-mini` instead of `gpt-5` (which doesn't exist). You can change this in `api/index.py` line 58 if you prefer a different model.

